import React from 'react';
import { render } from '@testing-library/react';
import Article from '../Article';

test('Deploys article page', () => {
  const { getByTestId } = render(<Article />);

  const articleElement = getByTestId('article-test');

  expect(articleElement).toBeInTheDocument();
});