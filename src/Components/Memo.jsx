import React from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const Container = styled.div`
  width: 100px;
  height: 100px;
  background-color: white;
`;

const Header = styled.header`
  height: 20px;
  background-color: #eee;
  position: relative;

  & > span {
    display: block;
    height: 100%;
    padding: 2px 0;
    right: 0;
    position: absolute;
    cursor: pointer;
  }
`;
const Content = styled.p`
  overflow: auto;
  height: 80px;
`;

function Memo({ memo }) {
  const { id, x, y, content } = memo;
  return (
    <Container>
      <Header>
        <span>
          <MdClose />
        </span>
      </Header>
      <Content>Lorem ipsum dolor {content}</Content>
    </Container>
  );
}

export default React.memo(Memo);
