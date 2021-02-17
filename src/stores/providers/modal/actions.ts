import { TOGGLE_MODAL, MODAL_STATUS } from './constants';

export const toggleModal = () => ({
  type: TOGGLE_MODAL,
});

export const setModalStatus = (opened: boolean) => ({
  type: MODAL_STATUS,
  payload: opened,
});

// import { Action, ActionCreator } from 'redux';

// type UserInfo = any;

// export interface UsersListUpdatedAction extends Action {
//   type: '@@chat/USERS_LIST_UPDATED';
//   payload: {
//     users: UserInfo[];
//   };
// }

// export const updateUsersList: ActionCreator<UsersListUpdatedAction> = (users: UserInfo[]) => ({
//   type: '@@chat/USERS_LIST_UPDATED',
//   payload: {
//     users,
//   },
// });

// export const fetchExample = (id: string) => {
//   return (dispatch, getState, { api, whatever }) => {
//     // you can use api and something else here
//   };
// };
