import { initialStateProps as NewsProps } from './providers/News/state';
import { initialStateProps as ModalProps } from './providers/Modal/state';

export type State = {
  News: NewsProps;
  Modal: ModalProps;
};

export type ActionType = {
  payload: {
    message?: string;
  };
};

export type StateObject = {
  state: Partial<State>;
  action?: ActionType;
};
