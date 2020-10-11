export type RequireOnlyOne<T, Keys extends keyof T = keyof T> =
  Pick<T, Exclude<keyof T, Keys>>
  & {
    [K in Keys]-?:
      Required<Pick<T, K>>
      & Partial<Record<Exclude<Keys, K>, undefined>>
  }[Keys]

// Like this?
// interface Qualified {
//   pageType: PageType;
//   pageId?: string;
//   id?: string;
// }
// type PageHandle = RequireOnlyOne<Qualified, "id" | "pageId">;

// type Z = Record<"one" | "two" | "three", string>
// // Z is now { one:string; two:string; three:string; }
// type W = Partial<Z>
// // W is now { one?:string; two?:string; three?:string; }
