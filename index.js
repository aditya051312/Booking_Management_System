import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/dashboard'>
        <DashboardPage />
      </Route>
      <Route path='/'>
        <LoginPage />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);