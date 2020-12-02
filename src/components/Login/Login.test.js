import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './Login';

test('Deploys Login Page', () => {
    const { getByTestId } = render(<Login />);
  
    const loginPageContainer = getByTestId('login-page-test');
  
    expect(loginPageContainer).toBeInTheDocument();
  });