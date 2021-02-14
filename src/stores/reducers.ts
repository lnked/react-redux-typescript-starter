import { combineReducers } from 'redux';

import News from './providers/News/reducers';
import Modal from './providers/Modal/reducers';

export const createReducer = () =>
  combineReducers({
    News,
    Modal,
  });
