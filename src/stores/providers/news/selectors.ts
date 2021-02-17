import { createSelector } from 'reselect';

import { State } from 'stores/types';

export const newsItems = createSelector(
  (state: State) => state.news.items,
  ({ data, ui }) => ({ ui, data }),
);

export const newsCount = createSelector(
  (state: State) => state.news.count,
  ({ data, ui }) => ({ ui, data }),
);

export const newsItem = createSelector(
  (state: State) => state.news.item,
  ({ data, ui }) => ({ ui, data }),
);
