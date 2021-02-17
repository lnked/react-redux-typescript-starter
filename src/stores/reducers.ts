import { combineReducers, Reducer } from 'redux';

import news from './providers/news/reducers';
import modal from './providers/modal/reducers';
import { State } from './types';

export const createReducer = (): Reducer<State> =>
  combineReducers<State>({
    news,
    modal,
  });
