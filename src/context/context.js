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


    return (
        <GithubContext.Provider value={{ githubUser, setGithubUser, repos, setRepos, followers, setFollowers }}>
            {children}
        </GithubContext.Provider>
    )
}

export { GithubContext, GithubProvider }