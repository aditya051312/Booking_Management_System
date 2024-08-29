import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

const LoginPage = () => {
  let history = useHistory();

  return (
    <div className="login-page">
      <div className="image-section">
        {/* Your image here */}
      </div>
      <div className="form-section">
        <h1>Login</h1>
        <p>Enter your email and password to access your account</p>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            // Here you would usually send the values to your server
            // For this example, we just redirect to the dashboard
            history.push('/dashboard');
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name="email" />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <Field name="password" type="password" />
              {errors.password && touched.password ? <div>{errors.password}</div> : null}
              <button type="submit">Login</button>
            </Form>
          )}
        </Formik>
        <button onClick={() => alert('Forgot password clicked')}>Forgot password?</button>
      </div>
    </div>
  );
};

export default LoginPage;
