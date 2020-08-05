import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// import store from './Modules/store';

import GlobalStyles from './Styles/GlobalStyles';
import App from './App';

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.querySelector('#app')
);
