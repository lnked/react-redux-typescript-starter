import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import districts from 'store/data/districts.json';

import loggerMiddleware from './middleware/logger';
import reducers from './reducers';

export function configureStore(preloadedState = {}) {
  const middlewares = [loggerMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares, thunk);

  const enhancers = compose(middlewareEnhancer);

  const store = createStore(reducers, preloadedState, enhancers);

  store.dispatch({
    type: 'FETCH_DISTRICTS',
    payload: {
      districts,
    }
  });

  console.log(store.getState());

  return store;
}
