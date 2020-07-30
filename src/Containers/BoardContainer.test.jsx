import React from 'react';
import { render } from '@testing-library/react';

import BoardContainer from './BoardContainer';
import { useDispatch, useSelector } from 'react-redux';

describe('BoardContainer', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) =>
      selector({
        memos: [],
      })
    );
  });

  describe('render BoardContainer with memos', () => {
    it('show memo content', () => {
      const { getByText } = render(<BoardContainer />);
    });
  });
});
