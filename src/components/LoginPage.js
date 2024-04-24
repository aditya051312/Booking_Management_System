import React from 'react';
import LoginForm from './LoginForm';
import './LoginPage.css';

function LoginPage() {
  return (
    <div className="login-page">
      <div className="image-section">
        <img src="../assets/images/login-image.jpg" alt="Login" />
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
