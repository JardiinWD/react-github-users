import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

// My API
const rootUrl = 'https://api.github.com';

// My Github context
const GithubContext = React.createContext()

const GithubProvider = ({ children }) => {

    // useState method for github user
    const [githubUser, setGithubUser] = useState(mockUser)
    // useState method for github repos
    const [repos, setRepos] = useState(mockRepos)
    // useState method for github followers
    const [followers, setFollowers] = useState(mockFollowers)

    // Request loading
    const [requests, setRequests] = useState(0)
    // loading
    const [loading, setLoading] = useState(false)

    // Error handling. Initially as an object
    // Show => boolean
    // msg => string
    const [error, setError] = useState({ show: false, msg: "" })

    // Error Handling
    const toggleErrorHandling = (show = false, msg = '') => {
        // Managing the error current state
        setError({ show, msg })
    }

    // Searching user on the input field
    const searchGithubUser = async (user) => {
        toggleErrorHandling() // With the default value
        setLoading(true) // Managing the 
        const response = await axios(`${rootUrl}/users/${user}`).catch(err => console.log(err))
        // If I received some data I finally manage my github user
        if (response) {
            // Update the current state of githubuser
            setGithubUser(response.data)
            // Destructuring of response
            const { login, followers_url } = response.data
            // Update Repos
            axios(`${rootUrl}/users/${login}/repos?per_page=100`)
                .then(response => setRepos(response.data))
            // Update Followers
            axios(`${followers_url}?per_page=100`)
                .then(response => setFollowers(response.data))
        }
        if (!response) toggleErrorHandling(true, ' There is no user with that username')
        // Checking the requests
        checkRequests()
        // Managing the loading and setted on false
        setLoading(false)
    }

    // Check request and callback fn
    const checkRequests = () => {
        axios(`${rootUrl}/rate_limit`)
            .then(({ data }) => {
                // Take the remaining number of requests
                let { rate: { remaining } } = data
                // Change the current state of requests
                setRequests(remaining)
                if (remaining === 0) {
                    // Throw a new arror
                    toggleErrorHandling(true, 'There is an Error, You exceeded your hourly rate limit of requests')
                }
            })
            .catch((error) => { console.error(error) })
    }

    // useEffect method
    useEffect(checkRequests, [])

    return (
        <GithubContext.Provider value={{ githubUser, repos, followers, requests, error, searchGithubUser, loading }}>
            {children}
        </GithubContext.Provider>
    )
}

export { GithubContext, GithubProvider }