import { newMemo } from './actions';
import reducer from './reducer';

describe('reducer', () => {
  describe('newMemo', () => {
    it('add new memo inside of memos', () => {
      const initialState = {
        memos: [],
      };

      const state = reducer(initialState, newMemo({ x: 1, y: 1 }));

      expect(state.memos[0]).toEqual({
        x: 1,
        y: 1,
        content: '',
      });
    });
  });
});
