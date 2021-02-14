import { StateProps as NewsProps } from './providers/News/state';
import { StateProps as ModalProps } from './providers/Modal/state';

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
