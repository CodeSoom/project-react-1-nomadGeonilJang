import React from 'react';
import styled from 'styled-components';
import Bedge from '../modules/styles/Badge';
const imagePath = '/dist/images/myImg.png';

const Container = styled.div`
  padding: 0 12px;
  cursor: pointer;
  height: 75px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #eee;
  }
`;

const Thumbnail = styled.div`
  @keyframes moveImg {
    from {
      transform: translateX(-50%);
    }
    to {
      transform: translateX(0);
    }
  }
  animation-name: moveImg;
  animation-duration: 2s;
  animation-fill-mode: forwards;

  border-radius: 50%;
  width: 65px;
  height: 65px;

  background: url(${imagePath}) no-repeat;
  background-size: 160%;
  background-position: -20px ${(props) => props.position}px;
`;

const RoomInfo = styled.div`
  @keyframes moveInfo {
    from {
      transform: translateY(50%);
    }
    to {
      transform: translateY(0);
    }
  }
  animation-name: moveInfo;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  padding: 12px;
  width: 290px;
  position: relative;
`;
const RoomInfoTitle = styled.h1`
  margin-bottom: 12px;
  font-weight: var(--weight-bold);
`;
const RoomInfoDate = styled.span`
  float: right;
  color: var(--color-cool-grey);
  font-weight: var(--weight-regular);
  &::after {
    content: '';
    clear: right;
  }
`;
const RoomInfoContent = styled.p`
  color: var(--color-cool-grey);
  overflow: hidden;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const RoomInfoUnRead = styled.span`
  position: absolute;
  bottom: 10px;
  right: 0;
`;

export default function ChatListItem({ room }) {
  return (
    <Container>
      <Thumbnail position={room.position} />
      <RoomInfo>
        <RoomInfoTitle>
          {room.title}
          <RoomInfoDate>{room.chats[room.chats.length - 1].ymd}</RoomInfoDate>
        </RoomInfoTitle>
        <RoomInfoContent>
          {
            room.chats[room.chats.length - 1].chats[
              room.chats[room.chats.length - 1].chats.length - 1
            ].content
          }
        </RoomInfoContent>
        {room.unread > 0 && (
          <RoomInfoUnRead>
            <Bedge>{room.unread}</Bedge>
          </RoomInfoUnRead>
        )}
      </RoomInfo>
    </Container>
  );
}
