import React, { Fragment } from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <AuthWrapper>
      <Router>
        {/* Switch Component */}
        <Switch>
          {/* Dashboard */}
          <PrivateRoute path="/" exact={true}>
            <Dashboard></Dashboard>
          </PrivateRoute>
          {/* Login */}
          <Route path="/login">
            <Login></Login >
          </Route>
          {/* Error page */}
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </AuthWrapper>
  );
}

export default App;
