import React from 'react';
import LoginForm from './Form';
import './styles.css';

function LoginPage() {
  return (
    <div className="login-page">
      <div className="image-section">
        <img src="path-to-your-image.jpg" alt="Learning" />
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
