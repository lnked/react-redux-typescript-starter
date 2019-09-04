import { local } from 'storage.io';

export const STORE_UI = 'ui';
export const STORE_APP = 'app';
export const STORE_DATA = 'data';
export const STORE_SESSION = 'session';
export const STORE_ROUTER = 'router';

export const SITE_LANGUAGE = local.get('language') || 'en';
