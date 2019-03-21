import * as React from 'react'

/** @private is the given object a Function? */
export const isFunction = (obj: any): obj is Function =>
  typeof obj === 'function'

/** @private is the given object an Object? */
export const isObject = (obj: any): boolean =>
  obj !== null && typeof obj === 'object'

/** @private is the given object an integer? */
export const isInteger = (obj: any): boolean =>
  String(Math.floor(Number(obj))) === obj

/** @private is the given object a string? */
export const isString = (obj: any): obj is string =>
  Object.prototype.toString.call(obj) === '[object String]'

/** @private is the given object a NaN? */
export const isNaN = (obj: any): boolean => obj !== obj

/** @private Does a React component have exactly 0 children? */
export const isEmptyChildren = (children: any): boolean =>
  React.Children.count(children) === 0

/** @private is the given object/value a promise? */
export const isPromise = (value: any): value is PromiseLike<any> =>
  isObject(value) && isFunction(value.then)
