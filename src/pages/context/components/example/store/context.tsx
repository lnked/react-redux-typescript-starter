import * as React from 'react';

const initialState = {
  left: '',
  right: '',
  center: '',
};

const { Provider, Consumer } = React.createContext(initialState);

const Reducer = (state: any, action: any) => {
  console.log({ state, action });

  switch (action.type) {
    case 'LEFT':
      return { ...state, left: action.value };
    case 'RIGHT':
      return { ...state, right: action.value };
    case 'CENTER':
      return { ...state, center: action.value };
    default:
      return { ...state };
  }
};

export {
  Reducer,
  Provider,
  Consumer,
};
