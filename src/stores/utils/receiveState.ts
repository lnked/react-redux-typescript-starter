export const receiveState = (name: any, { state, action }: any) => ({
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
