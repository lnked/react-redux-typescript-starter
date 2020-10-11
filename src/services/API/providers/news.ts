import { request } from 'services/API';
import type { CountProps, ItemProps } from 'services/types';

export const items = () => request().get('/news/items');

export const filters = () => request().get('/news/filters');

export const item = ({ slug }: ItemProps) =>
  request().get(`/news/item/${slug}`);

export const count = ({ count }: CountProps) =>
  request().get(`/news/count/${count}`);
