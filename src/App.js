import React, { Fragment } from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* Switch Component */}
      <Switch>
        {/* Dashboard */}
        <Route path="/" exact={true}>
          <Dashboard></Dashboard>
        </Route>
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
  );
}

export default App;
