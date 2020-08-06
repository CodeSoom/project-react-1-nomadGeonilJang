import { get, getYMD, makeNewYMN } from './index.js';

test('test util get', () => {
  const initialState = {
    name: 'Geonil.Jang',
  };
  const state = get('name')(initialState);
  expect(state).toBe('Geonil.Jang');
});

test('test util getYMD ', () => {
  const dateStr = '08/02/2020 20:25:30';
  const ymd = getYMD(dateStr);
  expect(ymd).toBe('08/02/2020');
});

test('test util makeNewYMN ', () => {
  const ymd = makeNewYMN();
});
