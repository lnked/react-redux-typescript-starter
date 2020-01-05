import { configure } from 'mobx';

import { enableLogging } from 'mobx-logger';

import { environment } from 'settings';

import {
  STORE_UI,
  STORE_APP,
  STORE_DATA,
  STORE_ROUTER,
  STORE_SESSION,
} from 'store/settings';

import {
  UiStore,
  AppStore,
  DataStore,
  // ArrayStore,
  // ObjectStore,
  SessionStore,
} from 'store/providers';

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

export const configureStore = (routerStore?: any) => {
  const {
    ui = {},
    app = {},
    data = {},
    // array = {},
    // object = {},
    session = {},
  } = (window && window.__INITIAL_STATE__) || {};

  const uiStore = new UiStore(ui);
  const appStore = new AppStore(app);
  const dataStore = new DataStore(data);
  // const arrayStore = new ArrayStore(array);
  // const objectStore = new ObjectStore(object);
  const sessionStore = new SessionStore(session);

  Reflect.deleteProperty(window, '__INITIAL_STATE__');

  return {
    [STORE_UI]: uiStore,
    [STORE_APP]: appStore,
    [STORE_DATA]: dataStore,
    // [STORE_ROUTER]: arrayStore,
    // [STORE_ROUTER]: objectStore,
    [STORE_ROUTER]: routerStore,
    [STORE_SESSION]: sessionStore,
  };
};