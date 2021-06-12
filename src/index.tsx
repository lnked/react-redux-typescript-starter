import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import App from '@app/App';
import { environment } from '@settings/environment';
import { store, persistor } from '@stores/index';

if (environment.development) {
  const whyDidYouRender = require('@welldone-software/why-did-you-render'); // eslint-disable-line
  const ReactRedux = require('react-redux'); // eslint-disable-line

  whyDidYouRender(React, {
    onlyLogs: true,
    titleColor: 'green',
    diffNameColor: 'darkturquoise',
    trackAllPureComponents: true,
    trackExtraHooks: [[ReactRedux, '[useSelector']],
  });
}

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>,
    document.getElementById('root'),
  );
};

render();

if (environment.production) {
  const isHttps = location.protocol.includes('https');
  if ('serviceWorker' in navigator && isHttps) {
    navigator.serviceWorker.register('/sw.js');
  }
}
if (environment.development && module.hot) {
  module.hot.accept();
}
