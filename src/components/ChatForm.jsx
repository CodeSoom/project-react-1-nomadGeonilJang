import React from 'react';

import { MdEmail } from 'react-icons/md';

import styled from 'styled-components';

import Input from '../modules/styles/Input';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  background-color: var(--color-pale-grey);
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Send = styled.button.attrs({
  type: 'submit',
})`
  background-color: var(--color-purple);
  color: var(--color-white);
  height: 32px;
  width: 32px;
  text-align: center;
  border-radius: 32px;
  margin-left: 4px;
  cursor: pointer;
  border: none;
  outline: none;

  /* font-size:  */
`;

export default function ChatForm({ roomId, value, onChange, name, onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(roomId);
  }

  return (
    <Container>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <Input
          placeholder={'메세지를 입력하세요.'}
          value={value}
          onChange={onChange}
          name={name}
        />
        <Send>
          <MdEmail />
        </Send>
      </form>
    </Container>
  );
}
