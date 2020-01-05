import { local } from 'storage.io';

export const SITE_LANGUAGE = local.get('language') || 'en';
