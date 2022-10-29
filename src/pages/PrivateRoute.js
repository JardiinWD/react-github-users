import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ children, ...rest }) => {
  // Destructuring of useAuth
  const { isAuthenticated, user } = useAuth0()
  // Setting isUser on isAuthenticate, so I can display the login page
  const isUser = isAuthenticated && user

  return (
    <Route {...rest} render={() => {
      // If user it's not logged the only path possible is login 
      return isUser ? children : <Redirect to='/login' />
    }} />
  );
};
export default PrivateRoute;
