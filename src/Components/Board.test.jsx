import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Board from './Board';

describe('Board', () => {
  it('redner Board', () => {
    const handleClickBoard = jest.fn();
    const { container } = render(<Board onClickBoard={handleClickBoard} />);
  });
});
