import { createSelector } from 'reselect';

export const modalIsOpen = createSelector(
  (state: any) => state.modal,
  ({ modalIsOpen }: any) => modalIsOpen,
);
