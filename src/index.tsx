import { createRoot } from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import App from '@app/App';
import { environment } from '@settings/environment';
import { store, persistor } from '@stores/index';

const rootNode = document.getElementById('root') || document.getElementsByTagName('body')[0];

const render = () => {
  createRoot(rootNode).render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>,
  );
};

render();

// if (environment.development) {
//   const whyDidYouRender = require('@welldone-software/why-did-you-render'); // eslint-disable-line

//   whyDidYouRender(React, {
//     trackAllPureComponents: true,
//     trackHooks: true,
//     trackExtraHooks: [
//       // [require('react-redux/lib'), 'useSelector'], // eslint-disable-line
//       // [require('react-router-dom/main'), 'useLocation'], // eslint-disable-line
//       // [require('react-i18next/dist/commonjs/useTranslation'), 'useTranslation'], // eslint-disable-line
//     ],
//   });
// }

if (environment.production) {
  const isHttps = location.protocol.includes('https');

  if ('serviceWorker' in navigator && isHttps) {
    navigator.serviceWorker.register('/sw.js');
  }
}

if (environment.development && module.hot) {
  module.hot.accept();
}
