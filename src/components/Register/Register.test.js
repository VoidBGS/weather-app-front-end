import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Register from './Register';

test('Deploys Register Page', () => {
    const { getByTestId } = render(<Register />);
  
    const registerPageContainer = getByTestId('register-page-test');
  
    expect(registerPageContainer).toBeInTheDocument();
  });