import React from 'react';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import './index.css';

// This component represents the login page.
function LoginPage() {
  const history = useHistory();

  // Formik is used to handle the form and its validation.
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      // Here, you would typically send the form values to the server for authentication.
      // For simplicity, we just redirect to the dashboard.
      history.push('/dashboard');
    },
  });

  return (
    <div className="login-page">
      <div className="image-section">
        {/* Insert your image here */}
      </div>
      <div className="form-section">
        <h1>Login</h1>
        <p>Enter your email and password to access your account</p>
        <form onSubmit={formik.handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            required
          />
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            required
          />
          <button type="submit">Login</button>
        </form>
        <button>Forgot password?</button>
      </div>
    </div>
  );
}

export default LoginPage;
