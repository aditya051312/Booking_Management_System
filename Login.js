import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';

function Login() {
  let history = useHistory();

  const handleSubmit = () => {
    history.push('/dashboard');
  };

  return (
    <div className="container">
      <div className="left">
        <img src="path_to_your_image" alt="LMS" />
      </div>
      <div className="right">
        <h1>Login</h1>
        <h2>Enter your email and password to access your account</h2>
        <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
          <Form>
            <Field type="email" name="email" placeholder="Email" />
            <Field type="password" name="password" placeholder="Password" />
            <button type="submit">Login</button>
          </Form>
        </Formik>
        <button>Forgot Password?</button>
      </div>
    </div>
  );
}

export default Login;
