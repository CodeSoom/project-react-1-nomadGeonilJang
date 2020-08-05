export function get(key) {
  return (state) => state[key];
}
export function get(key) {
  return (state) => state.chat[key];
}

export function getYMD(date) {
  return date.slice(0, 10);
}

export function makeNewYMN() {
  const date = new Date();
  const ymd =
    ('00' + (date.getMonth() + 1)).slice(-2) +
    '/' +
    ('00' + date.getDate()).slice(-2) +
    '/' +
    date.getFullYear();
  return ymd;
}
