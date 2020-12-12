export type State = any;

export type ActionType = {
  payload: {
    message: string;
  };
};

export type StateObject = {
  state: State;
  action?: ActionType;
};
