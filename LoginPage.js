import React from 'react';
import LoginForm from './LoginForm';
import './App.css';

const LoginPage = () => {
    return (
        <div className="login-page">
            <div className="image-section">
                <img src="path-to-image.jpg" alt="LMS" />
            </div>
            <div className="form-section">
                <h1>Login</h1>
                <p>Enter your email and password to access your account</p>
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginPage;
