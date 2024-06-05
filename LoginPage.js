import React from 'react';
import LoginForm from './LoginForm';
import './styles.css';

function LoginPage() {
  return (
    <div className="container">
      <div className="image-section">
        {/* Here goes the image */}
      </div>
      <div className="form-section">
        <h1>Login</h1>
        <p>Enter your email and password to access your account</p>
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
