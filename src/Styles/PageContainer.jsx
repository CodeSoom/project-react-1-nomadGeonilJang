import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 680px;
  height: 680px;
  border-radius: 5px;
  margin: auto;
  background-color: white;
  transform: translateY(25%);
`;

export default function PageContainer({ children }) {
  return <Container>{children}</Container>;
}
