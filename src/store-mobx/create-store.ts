import { configure } from 'mobx';

import { enableLogging } from 'mobx-logger';

import {
  UiStore,
  AppStore,
  DataStore,
  SessionStore,
} from './providers';

import {
  STORE_UI,
  STORE_APP,
  STORE_DATA,
  STORE_ROUTER,
  STORE_SESSION,
  environment,
} from 'settings';

configure({
  enforceActions: 'observed', // 'never' | 'always' | 'observed'
});

enableLogging({
  predicate: () => environment.development && Boolean(window.navigator.userAgent),
  action: true,
  reaction: false,
  transaction: false,
  compute: false,
});

export const createStore = (routerStore?: any) => {
  const {
    ui = {},
    app = {},
    data = {},
    session = {},
  } = (window && window.__INITIAL_STATE__) || {};

  const uiStore = new UiStore(ui);
  const appStore = new AppStore(app);
  const dataStore = new DataStore(data);
  const sessionStore = new SessionStore(session);

  Reflect.deleteProperty(window, '__INITIAL_STATE__');

  return {
    [STORE_UI]: uiStore,
    [STORE_APP]: appStore,
    [STORE_DATA]: dataStore,
    [STORE_ROUTER]: routerStore,
    [STORE_SESSION]: sessionStore,
  };
};
