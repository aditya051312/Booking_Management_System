import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: Yup.string()
    .required('Required'),
});

function LoginForm() {
  let history = useHistory();

  const handleSubmit = (values) => {
    // Here, you would normally send the values to your server for authentication
    // For now, we'll just redirect to the dashboard page
    history.push('/dashboard');
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor='email'>Email</label>
          <Field name='email' type='email' />
          <ErrorMessage name='email' component='div' />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <Field name='password' type='password' />
          <ErrorMessage name='password' component='div' />
        </div>
        <div>
          <button type='submit'>Login</button>
          <button type='button'>Forgot password?</button>
        </div>
      </Form>
    </Formik>
  );
}

export default LoginForm;