import { useHistory } from 'react-router-dom';

const handleForgotPassword = () => {
  const history = useHistory();
  
  // Redirect to password recovery page
  history.push('/password-recovery');
};

export default handleForgotPassword;
