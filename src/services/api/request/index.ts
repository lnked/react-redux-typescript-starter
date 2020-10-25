import axios from 'axios';

import { APP_API_URL } from 'settings';

import Token from './token';

const headers: any = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const request = (withToken: boolean = true) => {
  if (withToken) {
    const authorizationToken = Token.get();

    if (authorizationToken) {
      headers['x-access-token'] = `Auth ${authorizationToken}`;
    }
  }

  return axios.create({
    headers,
    baseURL: APP_API_URL,
  });
};
