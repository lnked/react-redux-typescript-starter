export const errorState = (name: any, { state, action }: any) => ({
  ...state,
  [name]: {
    ...state[name],
    data: action?.payload?.message,
    ui: {
      ...state[name].ui,
      isLoading: false,
      isError: true,
    },
  },
});
