import { useHistory } from 'react-router-dom';

const handleLogin = (values) => {
  const history = useHistory();
  
  // Placeholder for API call for login
  // If login is successful, redirect to dashboard
  history.push('/dashboard');
};

export default handleLogin;
