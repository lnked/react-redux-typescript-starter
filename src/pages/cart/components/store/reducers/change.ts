export function reducerLeft(state: any, action: any) {
  const { value } = action

  return { ...state, left: value }
}

export function reducerRight(state: any, action: any) {
  const { value } = action

  return { ...state, right: value }
}
