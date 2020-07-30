const initialState = {
  memos: [],
};

const reducers = {
  newMemo(state, { payload }) {
    return {
      ...state,
      memos: state.memos.concat([{ ...payload, content: '' }]),
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
