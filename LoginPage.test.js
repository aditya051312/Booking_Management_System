import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './LoginPage';

test('renders LoginPage', () => {
  const { getByText } = render(<Router><LoginPage /></Router>);
  const linkElement = getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});

test('allows the user to login successfully', async () => {
  const { getByLabelText, getByText } = render(<Router><LoginPage /></Router>);
  
  // Fill out the form
  fireEvent.change(getByLabelText(/Email/i), {
    target: { value: 'test@test.com' },
  });
  fireEvent.change(getByLabelText(/Password/i), {
    target: { value: 'password' },
  });
  
  fireEvent.click(getByText(/Login/i));
  
  // Expect to redirect to dashboard
  await waitFor(() => expect(getByText(/Welcome to the Dashboard/i)).toBeInTheDocument());
});
