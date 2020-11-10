import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navigation from './Navigation';

test('Deploys Navigation Component', () => {
    const { getByTestId } = render(<Navigation />);
  
    const errorPageElement = getByTestId('navigation-bar-test');
  
    expect(errorPageElement).toBeInTheDocument();
  });