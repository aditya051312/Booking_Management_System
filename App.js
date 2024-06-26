import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
    </Switch>
  );
}

export default App;