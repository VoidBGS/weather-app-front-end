import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ErrorPage from './ErrorPage';

test('Deploys error page', () => {
  const { getByTestId } = render(<ErrorPage />);

  const errorPageElement = getByTestId('errorpage-test');

  expect(errorPageElement).toBeInTheDocument();
});