import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { environment } from 'settings';
import { configureStore } from 'stores';

import App from 'app';

const store = configureStore(window.__APP_STATE__ || {});

// For easier debugging
window.__APP_STATE__ = store;

const elementToMount = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  elementToMount,
);

if (environment.production) {
  const isHttps = location.protocol.includes('https');

  if ('serviceWorker' in navigator && isHttps) {
    navigator.serviceWorker.register('/sw.js');
  }
}

if (environment.development && module.hot) {
  module.hot.accept();
}
