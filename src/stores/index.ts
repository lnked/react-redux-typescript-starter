import { applyMiddleware, createStore, AnyAction, Store } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { PersistConfig, persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { APP_NAME } from '@settings/api';
import { environment } from '@settings/environment';

import { initialState } from './initialState';
import { createReducer } from './reducers';
import * as services from './services';
import { State } from './types';

const persistConfig: PersistConfig<State> = {
  key: 'app',
  debug: environment.development,
  storage,
};

const composeEnhancers = composeWithDevTools({ name: APP_NAME, trace: true });

const middleware = [
  environment.development && require('redux-immutable-state-invariant').default(),
  thunk.withExtraArgument(services) as ThunkMiddleware<State, AnyAction, typeof services>,
].filter(Boolean);

const reducers = persistReducer<State>(persistConfig, createReducer());

export const store: Store<State> = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleware)),
);

export const persistor = persistStore(store);
