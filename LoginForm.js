import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useHistory } from 'react-router-dom';

function LoginForm() {
  let history = useHistory();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, { setSubmitting }) => {
        // Here goes the login logic
        // If login is successful, redirect to dashboard
        history.push('/dashboard');
        setSubmitting(false);
      }}
    >
      <Form>
        <Field type="email" name="email" placeholder="Email" />
        <Field type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
        <button type="button">Forgot password?</button>
      </Form>
    </Formik>
  );
}

export default LoginForm;
