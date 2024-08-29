import React from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import './login.css';

function LoginPage({ history }) {
  const handleSubmit = async (values) => {
    try {
      const response = await axios.post('/api/login', values);
      if (response.data.success) {
        history.push('/dashboard');
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      alert('An error occurred');
    }
  };

  return (
    <div className="login-page">
      <div className="image-section">
        <img src="/images/login-image.jpg" alt="Login" />
      </div>
      <div className="form-section">
        <h1>Login</h1>
        <p>Enter your email and password to access your account</p>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={handleSubmit}
        >
          <Form>
            <Field type="email" name="email" placeholder="Email" required />
            <Field type="password" name="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </Form>
        </Formik>
        <button className="forgot-password">Forgot password?</button>
      </div>
    </div>
  );
}

export default LoginPage;
