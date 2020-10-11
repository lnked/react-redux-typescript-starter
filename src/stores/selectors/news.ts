import { createSelector } from 'reselect';

export const newsItems = createSelector(
  (state: any) => state.news.items,
  ({ data, ui }: any) => ({ ui, data }),
);

export const newsCount = createSelector(
  (state: any) => state.news.count,
  ({ data, ui }: any) => ({ ui, data }),
);

export const newsItem = createSelector(
  (state: any) => state.news.item,
  ({ data, ui }: any) => ({ ui, data }),
);
