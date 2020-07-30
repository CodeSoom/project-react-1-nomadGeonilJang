import React from 'react';
import { render } from '@testing-library/react';

import BoardPage from './BoardPage';

jest.mock('react-redux');

test('redner BoardPage', () => {
  const { getByText } = render(<BoardPage />);
});
