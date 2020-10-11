// https://www.npmjs.com/package/storage.io
// import { session, local } from 'storage.io'
import { session } from 'storage.io';

const Token = {
  get(name: string = 'token') {
    return session.get(name);
  },

  set(name: string = 'token', value: string) {
    session.set(name, value);
  },

  clear(name: string = 'token') {
    session.remove(name);
  },
};

export default Token;
