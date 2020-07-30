const initialState = {
  newId: 0,
  memos: [],
};

const reducers = {
  newMemo(state, { payload }) {
    return {
      ...state,
      newId: state.newId + 1,
      memos: state.memos.concat([{ ...payload, id: state.newId, content: '' }]),
    };
  },
};

function defaultReducer(state, action) {
  return state;
}
function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}

export default reducer;
