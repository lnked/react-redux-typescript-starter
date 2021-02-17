import { createSelector } from 'reselect';

import { State } from 'stores/types';

export const modalIsOpen = createSelector(
  (state: State) => state.modal,
  ({ modalIsOpen }) => modalIsOpen,
);
