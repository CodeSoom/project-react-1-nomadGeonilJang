import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  width: ${(props) => props.size + 'px'};
  height: ${(props) => props.size + 'px'};
  border-radius: 50%;
  background-color: var(--color-purple);
  color: var(--color-white);
  text-align: center;
  line-height: ${(props) => props.size + 'px'};
`;

export default function Bedge({ children, size = 18 }) {
  return <Container size={size}>{children}</Container>;
}
