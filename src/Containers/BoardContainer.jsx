import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newMemo } from '../Modules/actions';
import Board from '../Components/Board';

export default function BoardContainer() {
  const dispatch = useDispatch();
  const memos = useSelector((state) => state.memos);

  function handClickContextMenu({ x, y }) {
    dispatch(newMemo({ x, y }));
  }

  return <Board onClickBoard={handClickContextMenu} memos={memos} />;
}
