export function reducerCenter(state: any, action: any) {
  const { value } = action;

  return { ...state, center: value };
}
