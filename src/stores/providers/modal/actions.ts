import { TOGGLE_MODAL, MODAL_STATUS } from './constants';

export const toggleModal = () => (dispatch: any) => dispatch({ type: TOGGLE_MODAL });

export const setModalStatus = (opened: boolean) => (dispatch: any) => dispatch({ type: MODAL_STATUS, payload: opened });
