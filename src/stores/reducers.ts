import { combineReducers } from 'redux';

import news from './providers/news/reducers';
import modal from './providers/modal/reducers';

export const createReducer = () => combineReducers({
  news,
  modal,
});
