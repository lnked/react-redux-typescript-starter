const presets = require('./configs/babel.config/presets');
const plugins = require('./configs/babel.config/plugins');
const overrides = require('./configs/babel.config/overrides');

const MIN_BABEL_VERSION = 7;

module.exports = function (api) {
  // api.assertVersion(MIN_BABEL_VERSION);
  // api.cache(true);

  const web = api.caller(caller => Boolean(caller && caller.target === 'web'));

  const test = api.env('test');
  const production = api.env('production');
  const development = api.env('development');

  const loose = true;
  const legacy = true;
  const targets = !web
    ? { node: 'current' }
    : {
        esmodules: !legacy,
        browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 10', 'iOS >= 8', 'Android >= 4'],
      };
  const useBuiltIns = 'entry';

  // webpackChunkName doesn't work if the value is false
  const comments = true;

  return {
    comments,
    presets: presets({ development, production, test, loose, useBuiltIns, targets }),
    plugins: plugins({ development, production, test, loose, legacy }),
    overrides: overrides({ development, production, test }),
    ignore: [],
  };
};
