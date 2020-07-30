import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

jest.mock('react-redux');

describe('App', () => {
  it('render App', () => {
    render(<App />);
  });
});
