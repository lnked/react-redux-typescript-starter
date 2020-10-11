import { errorState, loadingState, receiveState } from 'stores/utils';

import {
  FETCH_ITEMS,
  RECEIVE_ITEMS_DONE,
  RECEIVE_ITEMS_ERROR,
  FETCH_ITEM,
  RECEIVE_ITEM_DONE,
  RECEIVE_ITEM_ERROR,
  FETCH_COUNT,
  RECEIVE_COUNT_DONE,
  RECEIVE_COUNT_ERROR,
} from './constants';

const ui = {
  isError: true,
  isLoading: true,
};

export const DEFAULT_STATE: any = {
  items: {
    ui,
    data: [],
  },
  count: {
    ui,
    data: [],
  },
  item: {
    ui,
    data: {},
  },
};

export default function(state = DEFAULT_STATE, action: any) {
  console.log({ state, action });

  const reducers: Record<string, any> = {
    // Items
    [FETCH_ITEMS]: () => loadingState('items', { state }),
    [RECEIVE_ITEMS_DONE]: () => receiveState('items', { state, action }),
    [RECEIVE_ITEMS_ERROR]: () => errorState('items', { state, action }),

    // Item
    [FETCH_ITEM]: () => loadingState('item', { state }),
    [RECEIVE_ITEM_DONE]: () => receiveState('item', { state, action }),
    [RECEIVE_ITEM_ERROR]: () => errorState('item', { state, action }),

    // Count
    [FETCH_COUNT]: () => loadingState('count', { state }),
    [RECEIVE_COUNT_DONE]: () => receiveState('count', { state, action }),
    [RECEIVE_COUNT_ERROR]: () => errorState('count', { state, action }),
  };

  return (action?.type && reducers?.[action.type] && reducers?.[action.type]()) || state;
}
