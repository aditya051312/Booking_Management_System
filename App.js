import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';

function App() {
  return (
    <Router>
      <Route path="/" exact component={LoginPage} />
      <Route path="/dashboard" component={DashboardPage} />
    </Router>
  );
}

export default App;
