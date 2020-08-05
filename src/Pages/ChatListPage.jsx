import React, { useEffect } from 'react';
import ChatListContainer from '../containers/ChatListContainer';
import { useDispatch } from 'react-redux';

import { loadChatList } from '../modules/reducer/actions';

export default function ChatListPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadChatList());
  }, [dispatch]);
  return <ChatListContainer />;
}
