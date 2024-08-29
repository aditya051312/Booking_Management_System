import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useHistory } from 'react-router-dom';

function LoginForm() {
  let history = useHistory();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          history.push("/dashboard");
        }, 400);
      }}
    >
      <Form>
        <h1>Login</h1>
        <p>Enter your email and password to access your account</p>
        <Field type="email" name="email" placeholder="Email" required />
        <Field type="password" name="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <button type="button">Forgot password</button>
      </Form>
    </Formik>
  );
}

export default LoginForm;
