import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Board from './Board';

describe('Board', () => {
  describe('redner Board', () => {
    it('redner Board with memos', () => {
      const handleClickBoard = jest.fn();
      const memos = [{ id: 1, x: 1, y: 1, content: 'Hello' }];
      const { container } = render(
        <Board onClickBoard={handleClickBoard} memos={memos} />
      );

      expect(container).toHaveTextContent('Hello');
    });
  });
});
