import * as API from 'services/API/providers/news';

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

export const fetchItems = () =>
  (dispatch: any) => {
    dispatch({ type: FETCH_ITEMS });

    return API.items().then(response => dispatch({
      type: RECEIVE_ITEMS_DONE,
      payload: response.data,
    }));
  };

export const fetchFilters = () =>
  (dispatch: any) => {
    dispatch({ type: FETCH_FILTERS });

    return API.filters().then(response => dispatch({
      type: RECEIVE_FILTERS_DONE,
      payload: response.data,
    }));
  };

export const fetchCount = (payload: any = {}) =>
  (dispatch: any) => {
    dispatch({ type: FETCH_COUNT });

    const { count } = payload;

    return API.count({ count }).then(response => dispatch({
      type: RECEIVE_COUNT_DONE,
      payload: response.data,
    }));
  };

export const fetchItem = (payload: any = {}) =>
  (dispatch: any) => {
    dispatch({ type: FETCH_ITEM });

    const { slug } = payload;

    return API.item({ slug }).then(response => dispatch({
      type: RECEIVE_ITEM_DONE,
      payload: response.data,
    }));
  };
