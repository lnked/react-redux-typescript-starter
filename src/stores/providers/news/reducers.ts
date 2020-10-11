import {
  FETCH_ITEMS,
  RECEIVE_ITEMS_DONE,
  FETCH_FILTERS,
  RECEIVE_FILTERS_DONE,
  FETCH_ITEM,
  RECEIVE_ITEM_DONE,
  FETCH_COUNT,
  RECEIVE_COUNT_DONE,
} from './constants';

export const DEFAULT_STATE: any = {
  filters: {
    data: [],
    ui: {
      isError: true,
      isLoading: true,
    },
  },
  items: {
    data: [],
    ui: {
      isError: true,
      isLoading: true,
    },
  },
  count: {
    data: [],
    ui: {
      isError: true,
      isLoading: true,
    },
  },
  item: {
    data: {},
    ui: {
      isError: true,
      isLoading: true,
    },
  },
};

export default function(state = DEFAULT_STATE, action: any) {
  const reducers: Record<string, any> = {
    // Filters
    [FETCH_FILTERS]: () => ({
      ...state,
      filters: {
        ...state.item,
        ui: {
          ...state.item.ui, isLoading: true,
        },
      },
    }),
    [RECEIVE_FILTERS_DONE]: () => ({
      ...state,
      filters: {
        ...state.item,
        data: action.payload,
        ui: {
          ...state.item.ui, isLoading: false,
        },
      },
    }),

    // Items
    [FETCH_ITEMS]: () => ({
      ...state,
      items: {
        ...state.items,
        ui: {
          ...state.items.ui, isLoading: true,
        },
      },
    }),
    [RECEIVE_ITEMS_DONE]: () => ({
      ...state,
      items: {
        ...state.items,
        data: action.payload,
        ui: {
          ...state.items.ui, isLoading: false,
        },
      },
    }),

    // Item
    [FETCH_ITEM]: () => ({
      ...state,
      item: {
        ...state.item,
        ui: {
          ...state.item.ui, isLoading: true,
        },
      },
    }),
    [RECEIVE_ITEM_DONE]: () => ({
      ...state,
      item: {
        ...state.item,
        data: action.payload,
        ui: {
          ...state.item.ui, isLoading: false,
        },
      },
    }),

    // Count
    [FETCH_COUNT]: () => ({
      ...state,
      count: {
        ...state.count,
        ui: {
          ...state.count.ui, isLoading: true,
        },
      },
    }),
    [RECEIVE_COUNT_DONE]: () => ({
      ...state,
      count: {
        ...state.count,
        data: action.payload,
        ui: {
          ...state.count.ui, isLoading: false,
        },
      },
    }),
  };

  return (action?.type && reducers?.[action.type] && reducers?.[action.type]()) || state;
}
