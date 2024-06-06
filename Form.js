import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useHistory } from 'react-router-dom';

function LoginForm() {
  let history = useHistory();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
          errors.email = 'Invalid email address';
        }
        if (!values.password) {
          errors.password = 'Required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          // Here you can replace with your authentication logic
          history.push("/dashboard");
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
