import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { loadChats } from '../modules/reducer/actions';

import RoomContainer from '../containers/RoomContainer';

export default function RoomPage({ match: { params } }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (params.id) {
      dispatch(loadChats({ id: params.id }));
    }
  }, [params.id, dispatch]);

  return <RoomContainer />;
}
