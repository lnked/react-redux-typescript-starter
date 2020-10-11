import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { setConfig } from 'react-hot-loader';

import { environment } from 'settings';
import { configureStore } from 'stores';

import App from 'app';

setConfig({
  ignoreSFC: true,
  pureRender: true,
});

const store = configureStore();

// For easier debugging
window.__APP_STATE__ = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app-root')
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
