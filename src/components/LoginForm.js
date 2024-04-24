import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

function LoginForm() {
  let history = useHistory();

  const handleSubmit = (values, { setSubmitting }) => {
    // Here you would usually make a request to your server to log in the user
    // For this example, we'll just simulate a successful login by redirecting to the dashboard
    setTimeout(() => {
      history.push('/dashboard');
      setSubmitting(false);
    }, 500);
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="email" name="email" />
          <Field type="password" name="password" />
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
