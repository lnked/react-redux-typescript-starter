import { TOGGLE_MODAL, MODAL_STATUS } from './constants';
import { initialState, initialStateProps } from './state';

export default function (state: initialStateProps = initialState, action: any) {
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
