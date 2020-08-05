import { makeNewYMN } from '../../utils';

const initialState = {
  title: '채팅',
  rooms: [],
  room: [],
  chatInput: '',
  showImageSelector: false,
  images: [],
};

function getTime() {
  var date = new Date();
  var dateStr =
    ('00' + (date.getMonth() + 1)).slice(-2) +
    '/' +
    ('00' + date.getDate()).slice(-2) +
    '/' +
    date.getFullYear() +
    ' ' +
    ('00' + date.getHours()).slice(-2) +
    ':' +
    ('00' + date.getMinutes()).slice(-2) +
    ':' +
    ('00' + date.getSeconds()).slice(-2);
  return dateStr;
}

const reducers = {
  setChatList(state, { payload }) {
    return {
      ...state,
      rooms: payload.rooms,
    };
  },
  setRoom(state, { payload }) {
    return {
      ...state,
      room: payload.room,
    };
  },
  setTitle(state, { payload }) {
    return {
      ...state,
      title: payload.title,
    };
  },
  setInput(state, { payload }) {
    return {
      ...state,
      [payload.name]: payload.value,
    };
  },
  setNewChat(state, { payload }) {
    //챗 내용을 해당방에서만 유지하는 방식으로 구현,
    //실제로는 방에 들어 갈때 마다 서버로 요청하여 방정보 받아온다.
    const ymd = payload.ymd;
    let ymdChatIndex = state.room.chats.findIndex((yChat) => yChat.ymd === ymd);
    const roomChats = [...state.room.chats];

    if (ymdChatIndex === -1) {
      const dateStr = makeNewYMN();
      ymdChatIndex = state.room.chats.length;
      roomChats[ymdChatIndex] = { ymd: dateStr, chats: [] };
    }
    roomChats[ymdChatIndex].chats.push({
      author: 'me',
      content: state.chatInput,
      time: getTime(),
    });
    return {
      ...state,
      chatInput: '',
      room: {
        ...state.room,
        chats: [...roomChats],
      },
    };
  },
  showImageSelector(state) {
    return {
      ...state,
      showImageSelector: !state.showImageSelector,
    };
  },
  setRoomImages(state, { payload }) {
    return {
      ...state,
      images: payload.images,
    };
  },
  selectImg(state, { payload }) {
    //챗 내용을 해당방에서만 유지하는 방식으로 구현,
    //실제로는 방에 들어 갈때 마다 서버로 요청하여 방정보 받아온다.
    const { selectedImg, ymd } = payload;

    let ymdChatIndex = state.room.chats.findIndex((yChat) => yChat.ymd === ymd);
    const roomChats = [...state.room.chats];

    if (ymdChatIndex === -1) {
      const dateStr = makeNewYMN();
      ymdChatIndex = state.room.chats.length;
      roomChats[ymdChatIndex] = { ymd: dateStr, chats: [] };
    }
    roomChats[ymdChatIndex].chats.push({
      author: 'me',
      content: selectedImg.position,
      time: getTime(),
      type: 'img',
    });
    return {
      ...state,
      chatInput: '',
      room: {
        ...state.room,
        chats: [...roomChats],
      },
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
