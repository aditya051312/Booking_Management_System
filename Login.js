import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  let history = useHistory();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="image.jpg" alt="Learning" style={{height: '100%', width: '100%'}} />
        </div>
        <div className="col-md-6">
          <h2>Login</h2>
          <p>Enter your email and password to access your account</p>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values, { setSubmitting }) => {
              // Here you would usually make a request to your server to log in the user
              // For this example, we'll simply log them in right away
              setSubmitting(false);
              history.push('/dashboard');
            }}
          >
            <Form>
              <Field type="email" name="email" placeholder="Email" />
              <Field type="password" name="password" placeholder="Password" />
              <button type="submit">Login</button>
              <button type="button">Forgot password?</button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Login;
