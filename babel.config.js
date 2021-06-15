const presets = require('./configs/babel/presets');
const plugins = require('./configs/babel/plugins');
const overrides = require('./configs/babel/overrides');

const MIN_BABEL_VERSION = 7;

module.exports = function (api) {
  api.assertVersion(MIN_BABEL_VERSION);

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
      };
  const useBuiltIns = 'entry';

  const comments = true; // webpackChunkName doesn't work if the value is false

  return {
    comments,
    presets: presets({ development, production, test, loose, useBuiltIns, targets }),
    plugins: plugins({ development, production, test, loose, legacy }),
    overrides: overrides(),
    ignore: [],
  };
};
