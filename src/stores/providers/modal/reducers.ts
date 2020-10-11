import { TOGGLE_MODAL, MODAL_STATUS } from './constants';

export const DEFAULT_STATE: any = {
  modalIsOpen: false,
};

export default function(state = DEFAULT_STATE, action: any) {
  const reducers: Record<string, any> = {
    [TOGGLE_MODAL]: () => ({
      modalIsOpen: !state.modalIsOpen,
    }),
    [MODAL_STATUS]: () => ({
      modalIsOpen: action.payload,
    }),
  };

  return (action?.type && reducers?.[action.type] && reducers?.[action.type]()) || state;
}
