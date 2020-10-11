export const errorState = (name, { state, action }) => ({
  ...state,
  [name]: {
    ...state[name],
    data: action.payload.message,
    ui: {
      ...state[name].ui,
      isLoading: false,
      isError: true,
    },
  },
});
