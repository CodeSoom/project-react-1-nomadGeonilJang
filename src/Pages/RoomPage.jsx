import React, { useEffect } from 'react';
import RoomContainer from '../containers/RoomContainer';
import { useDispatch } from 'react-redux';
import { loadChats } from '../modules/reducer/actions';

export default function RoomPage({ match: { params } }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (params.id) {
      dispatch(loadChats({ id: params.id }));
    }
  }, [params.id, dispatch]);
  return <RoomContainer />;
}
