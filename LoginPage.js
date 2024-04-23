import React from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  const history = useHistory();

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post('/api/login', values);
      if (response.status === 200) {
        history.push('/dashboard');
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src="your_image.jpg" alt="LMS" style={{ height: '100vh', width: '100%' }} />
        </div>
        <div className="col-6">
          <h2>Login</h2>
          <p>Enter your email and password to access your account</p>
          <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
            {({ isSubmitting }) => (
              <Form>
                <Field type="email" name="email" placeholder="Email" />
                <Field type="password" name="password" placeholder="Password" />
                <button type="submit" disabled={isSubmitting}>Login</button>
                <button type="button">Forgot Password?</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
