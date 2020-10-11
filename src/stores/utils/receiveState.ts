export const receiveState = (name, { state, action }) => ({
  ...state,
  [name]: {
    ...state[name],
    data: action.payload,
    ui: {
      ...state[name].ui, isLoading: false,
    },
  },
});
