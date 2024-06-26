import React from 'react';
import { useAuth } from './useAuth';
import { useHistory } from 'react-router-dom';

function Dashboard() {
  const auth = useAuth();
  const history = useHistory();

  const handleLogout = () => {
    auth.signout(() => history.push('/login'));
  };

  return (
    <div className="dashboard-page">
      <h1>Welcome to the Dashboard!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;