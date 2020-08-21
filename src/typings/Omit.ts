export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// type X = { foo: string, bar: string };
// type Y = Omit<X, "bar">;
// // Y is now { foo: string }
