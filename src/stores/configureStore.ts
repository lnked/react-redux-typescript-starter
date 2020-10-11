import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import invariant from 'redux-immutable-state-invariant';

import news from './providers/news/reducers';
import modal from './providers/modal/reducers';

const reducers = combineReducers({
  news,
  modal,
});

export const configureStore = (preloadedState: any = {}) => {
  const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25,
  });

  const store = createStore(reducers, preloadedState, composeEnhancers(
    applyMiddleware(invariant(), thunk),
  ));

  return store;
};
