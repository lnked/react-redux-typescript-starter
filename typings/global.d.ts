// declare global {
//   type unknown = { [key: string]: any } | object | number | string | boolean | symbol | undefined | null | void
// }

declare var process: {
  on: any;

  env: {
    [key: string]: string | undefined;
    PUBLIC_URL: string;
  }
}
