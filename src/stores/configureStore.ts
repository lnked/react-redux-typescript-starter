import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { environment, APP_NAME } from 'settings';

import { createReducer } from './reducers';
import { State } from './types';

const middleware = [
  environment.development && require('redux-immutable-state-invariant').default(), // eslint-disable-line
  thunk,
].filter(Boolean);

export const configureStore = (initialState: State = {}) => {
  const store = createStore(
    createReducer(),
    initialState,
    composeWithDevTools({ name: APP_NAME })(
      applyMiddleware(...middleware),
    )
  );

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer());
    });
  }

  return store;
};
