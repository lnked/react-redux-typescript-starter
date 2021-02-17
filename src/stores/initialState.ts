import { initialState as news } from './providers/news/state';
import { initialState as modal } from './providers/modal/state';
import { State } from './types';

export const initialState: State = {
  news,
  modal,
};
