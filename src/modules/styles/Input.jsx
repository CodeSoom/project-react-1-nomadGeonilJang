import React from 'react';

import styled from 'styled-components';

const FormInput = styled.input`
  color: var(--color-cool-grey);
  outline: none;
  border: none;
  background-color: var(--color-white);
  width: 300px;
  height: 32px;
  border-radius: 15px;
  padding-left: 14px;
  -webkit-box-shadow: 3px 3px 5px 0px rgba(199, 199, 199, 1);
  -moz-box-shadow: 3px 3px 5px 0px rgba(199, 199, 199, 1);
  box-shadow: 3px 3px 5px 0px rgba(199, 199, 199, 1);
`;
export default function Input({ value, onChange, name, placeholder }) {
  function handleChange(event) {
    const { name, value } = event.target;
    onChange({ name, value });
  }
  return (
    <FormInput
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={handleChange}
    />
  );
}
