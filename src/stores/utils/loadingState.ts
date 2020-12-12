import { StateObject } from 'stores/types';

export const loadingState = (name: string, { state }: StateObject) => ({
  ...state,
  [name]: {
    ...state[name],
    ui: {
      ...state[name].ui,
      isLoading: true,
    },
  },
});
