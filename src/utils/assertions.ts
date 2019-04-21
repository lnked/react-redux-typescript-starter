import * as React from 'react';

export const isFunction = (obj: any) =>
  typeof obj === 'function';

export const isObject = (obj: any): boolean =>
  obj !== null && typeof obj === 'object';

export const isInteger = (obj: any): boolean =>
  String(Math.floor(Number(obj))) === obj;

export const isString = (obj: any): obj is string =>
  Object.prototype.toString.call(obj) === '[object String]';

export const isNaN = (obj: any): boolean => obj !== obj;

export const isEmptyChildren = (children: any): boolean =>
  React.Children.count(children) === 0;

export const isPromise = (value: any): value is PromiseLike<any> =>
  isObject(value) && isFunction(value.then);
