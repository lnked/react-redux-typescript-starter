import { StateObject } from 'stores/types';

export const errorState = (name: string, { state, action }: StateObject) => ({
  ...state,
  [name]: {
    ...state[name],
    data: action?.payload.message,
    ui: {
      ...state[name].ui,
      isLoading: false,
      isError: true,
    },
  },
});
