export const loadingState = (name: any, { state }: any) => ({
  ...state,
  [name]: {
    ...state[name],
    ui: {
      ...state[name]?.ui,
      isLoading: true,
    },
  },
});
