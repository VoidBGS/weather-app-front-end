import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Maps from './Maps';

test('Deploys maps page', () => {
  const { getByTestId } = render(<Maps />);

  const mapsPageElement = getByTestId('maps-page-test');

  expect(mapsPageElement).toBeInTheDocument();
});