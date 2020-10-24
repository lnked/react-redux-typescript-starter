import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { environment, APP_NAME } from 'settings';

import { rootReducer } from './reducers';
import { State } from './types';

const middleware = [
  environment.development && require('redux-immutable-state-invariant').default(), // eslint-disable-line
  thunk,
].filter(Boolean);

export const configureStore = (initialState: State = {}) =>
  createStore(
    rootReducer,
    initialState,
    composeWithDevTools({ name: APP_NAME })(
      applyMiddleware(...middleware),
    ));

