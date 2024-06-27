import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import './login.css';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

function LoginPage() {
  let history = useHistory();

  return (
    <div className="login-page">
      <div className="image-section">
        {/* Insert captivating image here */}
      </div>
      <div className="form-section">
        <h1>Login</h1>
        <p>Enter your email and password to access your account</p>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={(values, { setSubmitting }) => {
            // Here you can connect to your authentication service
            setSubmitting(false);
            history.push('/dashboard');
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
        <button onClick={() => alert('Forgot password clicked')}>
          Forgot password
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
