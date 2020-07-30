export function newMemo({ x, y }) {
  return {
    type: 'newMemo',
    payload: {
      x,
      y,
    },
  };
}
