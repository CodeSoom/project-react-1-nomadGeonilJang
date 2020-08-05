import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  width: 381px;
  height: 678px;
  background-color: var(--color-white);
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
`;

export default function PageContainer({ children }) {
  return <Container>{children}</Container>;
}
