import React from 'react';

import { render } from '@testing-library/react';

import Badge from './Badge';

test('Badge', () => {
  const { container } = render(<Badge>jgi</Badge>);

  expect(container).toHaveTextContent('jgi');
});
