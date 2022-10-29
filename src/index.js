import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';

// Domain : dev-gx7ypnxahibu0t27.us.auth0.com
// Client ID : NB4HF5yfNqX6LPQC8oq4LRmPwwtdpuGG

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider domain="dev-gx7ypnxahibu0t27.us.auth0.com"
      clientId="NB4HF5yfNqX6LPQC8oq4LRmPwwtdpuGG"
      redirectUri={window.location.origin}
      cacheLocation='localstorage'
    >
      {/* My app component wrapped between the provider */}
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
