import React from 'react';
import { useDispatch } from 'react-redux';
import { newMemo } from '../Modules/actions';
import Board from '../Components/Board';

export default function BoardContainer() {
  const dispatch = useDispatch();

  function handClickContextMenu({ x, y }) {
    dispatch(newMemo({ x, y }));
  }

  return <Board onClickBoard={handClickContextMenu} />;
}
