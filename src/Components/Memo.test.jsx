import React from 'react';
import { render } from '@testing-library/react';
import Memo from './Memo';

describe('Memo', () => {
  context('with content', () => {
    describe('render memo card', () => {
      it('show memo with content', () => {
        const memo = {
          id: 1,
          x: 1,
          y: 1,
          content: 'Hello',
        };

        const { getByText } = render(<Memo memo={memo} />);
        expect(getByText(/Hello/)).not.toBeNull();
      });
    });
  });
  context('without content', () => {});
});
