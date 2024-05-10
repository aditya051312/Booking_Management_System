import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import './LoginPage.css';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

function LoginPage() {
  let history = useHistory();

  return (
    <div className="login-page">
      <div className="image-section">
        {/* Replace with your image */}
        <img src="https://via.placeholder.com/600" alt="LMS" />
      </div>
      <div className="form-section">
        <h1>Login</h1>
        <p>Enter your email and password to access your account</p>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={(values, { setSubmitting }) => {
            // TODO: Implement actual login logic here
            console.log(values);
            setSubmitting(false);
            history.push('/dashboard');
          }}
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
        <button onClick={() => { /* TODO: Implement forgot password logic here */ }}>
          Forgot Password
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
