import db from '../../constants/chatDB';
import { makeNewYMN } from '../../utils';

export const setChatList = (list) => ({
  type: 'setChatList',
  payload: { rooms: list },
});
export const loadChatList = () => (dispatch) => {
  dispatch(setChatList(db.rooms));
};

export const setRoom = (room) => {
  return {
    type: 'setRoom',
    payload: { room },
  };
};
export const loadChats = ({ id }) => (dispatch) => {
  const room = db.rooms.find((room) => room.id === id);
  dispatch(setRoom(room));
};

export const setTitle = (title) => ({
  type: 'setTitle',
  payload: { title },
});

export const setInput = ({ name, value }) => ({
  type: 'setInput',
  payload: { name, value },
});

export const setNewChat = (id) => {
  const ymd = makeNewYMN();

  return {
    type: 'setNewChat',
    payload: { id, ymd },
  };
};

export const sendNewChat = (id) => (dispatch) => {
  // 서버로 새로운 챗을 전송한다.
  // 실제로는 받아온 정보를 방을 업데이트 진행한다.
  dispatch(setNewChat(id));
};

export const showImageSelector = () => ({
  type: 'showImageSelector',
});

export const setRoomImages = (images) => ({
  type: 'setRoomImages',
  payload: { images },
});
export const loadRoomImages = () => (dispatch) => {
  //서버에서 이미지 받아오는 방식으로
  console.log(db.roomImages);
  const images = db.roomImages;
  dispatch(setRoomImages(images));
};

export const selectImg = (id) => {
  const selectedImg = db.roomImages.find((i) => i.id === id);
  const ymd = makeNewYMN();
  return {
    type: 'selectImg',
    payload: { selectedImg, ymd },
  };
};
