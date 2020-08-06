import React from 'react';
import { useSelector } from 'react-redux';
import { get } from '../utils';
import ChatListItem from '../components/ChatListItem';
import { Link } from 'react-router-dom';

export default function ChatListContainer() {
  const rooms = useSelector(get('rooms'));

  return (
    <ul>
      {rooms &&
        rooms.map((room) => (
          <li key={room.id}>
            <Link to={`/room/${room.id}`}>
              <ChatListItem room={room} />
            </Link>
          </li>
        ))}
    </ul>
  );
}
