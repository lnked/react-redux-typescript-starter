declare module '*.json' {
  const value: any;
  export const version: string;
  export default value;
}

declare module '*.json5' {
  const value: any;
  export const version: string;
  export default value;
}

declare module '*.css' {
  const content: any;
  export default content;
}

declare module '*.scss' {
  const _: string;
  export default _;
}

declare module '*.woff';
declare module '*.woff2';
