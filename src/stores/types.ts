import { CombinedState } from 'redux';

import { StateProps as NewsProps } from './providers/news/state';
import { StateProps as ModalProps } from './providers/modal/state';

export type State = CombinedState<{
  news: NewsProps;
  modal: ModalProps;
}>;
