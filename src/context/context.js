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
    return (
        <GithubContext.Provider value={'Dio maiale'}>
            {children}
        </GithubContext.Provider>
    )
}

export { GithubContext, GithubProvider }