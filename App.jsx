import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import LoginPage from './LoginPage';

const App = () => {
  return (
    <Router>
      <Route path="/login" component={LoginPage} />
      <Redirect from="/" to="/login" />
    </Router>
  );
};

export default App;