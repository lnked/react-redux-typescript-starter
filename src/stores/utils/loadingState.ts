export const loadingState = (name, { state }) => ({
  ...state,
  [name]: {
    ...state[name],
    ui: {
      ...state[name].ui, isLoading: true,
    },
  },
});
