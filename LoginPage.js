import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
  const history = useHistory();

  const handleLogin = async (values) => {
    try {
      const response = await axios.post('/api/login', values);
      if (response.status === 200) {
        history.push('/dashboard');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Login error', error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src="login-image.jpg" alt="Login" className="img-fluid" />
        </div>
        <div className="col-6">
          <h1>Login</h1>
          <p>Enter your email and password to access your account</p>
          <Formik initialValues={{ email: '', password: '' }} onSubmit={handleLogin}>
            <Form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field name="email" type="email" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field name="password" type="password" className="form-control" />
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
              <button type="button" className="btn btn-link">Forgot password?</button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
