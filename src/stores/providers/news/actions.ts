import * as API from 'services/API/providers/news';

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

export const fetchItems = () =>
  (dispatch: any) => {
    dispatch({ type: FETCH_ITEMS });

    return API.items()
      .then(response => dispatch({ type: RECEIVE_ITEMS_DONE, payload: response.data }))
      .catch(error => dispatch({ type: RECEIVE_ITEMS_ERROR, payload: error }));
  };

export const fetchCount = (payload: any = {}) =>
  (dispatch: any) => {
    dispatch({ type: FETCH_COUNT });

    const { count } = payload;

    return API.count({ count })
      .then(response => dispatch({ type: RECEIVE_COUNT_DONE, payload: response.data }))
      .catch(error => dispatch({ type: RECEIVE_COUNT_ERROR, payload: error }));
  };

export const fetchItem = (payload: any = {}) =>
  (dispatch: any) => {
    dispatch({ type: FETCH_ITEM });

    const { slug } = payload;

    return API.item({ slug })
      .then(response => dispatch({ type: RECEIVE_ITEM_DONE, payload: response.data }))
      .catch(error => dispatch({ type: RECEIVE_ITEM_ERROR, payload: error }));
  };
