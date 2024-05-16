import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useHistory } from 'react-router-dom';
import './Login.css';

const LoginPage = () => {
  let history = useHistory();

  const handleSubmit = () => {
    history.push('/dashboard');
  };

  return (
    <div className='container'>
      <div className='image-section'></div>
      <div className='form-section'>
        <h1>Login</h1>
        <p>Enter your email and password to access your account</p>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={handleSubmit}
        >
          <Form>
            <Field name='email' type='email' placeholder='Email' />
            <Field name='password' type='password' placeholder='Password' />
            <button type='submit'>Login</button>
            <button type='button'>Forgot Password</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
