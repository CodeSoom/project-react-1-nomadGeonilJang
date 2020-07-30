import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './Modules/store';

import GlobalStyles from './Styles/GlobalStyles';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>,
  document.querySelector('#app')
);
