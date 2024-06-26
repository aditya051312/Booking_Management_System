import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useAuth } from './useAuth';
import { useHistory } from 'react-router-dom';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8, 'Password is too short - should be 8 chars minimum.').required('Required'),
});

function LoginPage() {
  const auth = useAuth();
  const history = useHistory();

  const handleSubmit = (values, { setSubmitting }) => {
    auth.signin(values.email, values.password, () => {
      history.push("/dashboard");
    });
    setSubmitting(false);
  };

  return (
    <div className="login-page">
      <div className="form-container">
        <h1>Login</h1>
        <p>Enter your email and password to access your account</p>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
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
      </div>
    </div>
  );
}

export default LoginPage;