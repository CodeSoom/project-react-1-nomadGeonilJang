import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  background-color: red;
  height: 40px;
  line-height: 40px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 0 10px;
  font-size: 32px;
  color: white;
  background-color: #eee;
`;

export default function PageTitle({ title }) {
  return <Title>{title}</Title>;
}
