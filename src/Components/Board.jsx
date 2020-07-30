import React from 'react';
import styled from 'styled-components';

import Memo from './Memo';

const Space = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
  overflow: auto;
`;

export default function Board({ onClickBoard, memos }) {
  function handleClickBoard(event) {
    event.preventDefault();
    const rx = event.target.getBoundingClientRect().x;
    const ry = event.target.getBoundingClientRect().y;
    const x = event.clientX - rx;
    const y = event.clientY - ry;
    onClickBoard({ x, y });
  }
  return (
    <Space onContextMenu={handleClickBoard}>
      {memos && memos.map((memo) => <Memo key={memo.id} memo={memo} />)}
    </Space>
  );
}
