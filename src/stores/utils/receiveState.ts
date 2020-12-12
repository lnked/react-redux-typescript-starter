import { StateObject } from 'stores/types';

export const receiveState = (name: string, { state, action }: StateObject) => ({
  ...state,
  [name]: {
    ...state[name],
    data: action?.payload,
    ui: {
      ...state[name].ui,
      isLoading: false,
    },
  },
});
