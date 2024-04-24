import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;