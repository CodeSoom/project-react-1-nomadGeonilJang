import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 640px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export default function PageContent({ children }) {
  return <Container>{children}</Container>;
}
