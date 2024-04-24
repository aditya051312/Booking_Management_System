import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import FormInput from './FormInput';

function LoginPage() {
  let history = useHistory();

  const handleSubmit = (values) => {
    history.push('/dashboard');
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <h1>Login</h1>
        <p>Enter your email and password to access your account</p>
        <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
          {() => (
            <Form>
              <FormInput name="email" type="email" placeholder="Email" />
              <FormInput name="password" type="password" placeholder="Password" />
              <button type="submit">Login</button>
            </Form>
          )}
        </Formik>
        <button onClick={() => alert('Forgot password functionality not implemented')}>Forgot password?</button>
      </div>
    </div>
  );
}

export default LoginPage;