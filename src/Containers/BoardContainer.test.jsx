import React from 'react';
import { render } from '@testing-library/react';

import BoardContainer from './BoardContainer';
import { useDispatch } from 'react-redux';

test('redner BoardContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  const { getByText } = render(<BoardContainer />);
});
