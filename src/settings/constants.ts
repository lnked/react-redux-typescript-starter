import { local } from 'storage.io';

const language = window.navigator.language.slice(0, 2);

// local.set('language', 'ru');

export const STORE_UI = 'ui';
export const STORE_APP = 'app';
export const SITE_LANGUAGE = local.get('language') || language || 'ru';
