import React from 'react';

import { screen, render, fireEvent } from '@testing-library/react';

import ChatForm from './ChatForm';

const { getByPlaceholderText } = screen;

describe('ChatForm', () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();

  const renderChatForm = () => render((
    <ChatForm
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  ));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('when sumbit', () => {
    it('handleSubmit is called', () => {
      renderChatForm();

      const input = getByPlaceholderText('메세지를 입력하세요.');
      fireEvent.submit(input)

      expect(handleSubmit).toBeCalled();
    });
  });

  context('when change input', () => {
    it('handleChange is called', () => {
      renderChatForm();

      const input = getByPlaceholderText('메세지를 입력하세요.');
      fireEvent.change(input, { target: { value: '메시지' } });

      expect(handleChange).toBeCalled();
    });
  });
});
