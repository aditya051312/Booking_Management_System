import React from 'react';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
    let history = useHistory();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            // Here, you would usually send a request to your server to log the user in
            // For simplicity, we'll just redirect to the dashboard
            history.push('/dashboard');
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            <button type="submit">Login</button>
            <button type="button">Forgot Password</button>
        </form>
    );
};

export default LoginForm;
