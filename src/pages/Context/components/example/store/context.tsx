import * as React from 'react';

export const initialState = {
  left: '',
  right: '',
  center: '',
};

export const { Provider, Consumer } = React.createContext(initialState);

export const getState = (state: any, action: any) => {
  switch (action.type) {
    case 'LEFT':
      return { ...state, left: action.value };
    case 'RIGHT':
      return { ...state, right: action.value };
    case 'CENTER':
      return { ...state, center: action.value };
    default:
      return state;
  }
};
