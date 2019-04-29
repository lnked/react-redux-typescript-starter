const { resolve } = require('path');
const { parseArguments } = require('./tools/helpers');

const environment = process.env.NODE_ENV || 'development';
const root = resolve(__dirname, '..');
const options = parseArguments(process.argv);

process.env.NODE_ENV = process.env.BABEL_ENV = environment;

const production = environment === 'production';
const development = environment === 'development';

const publicPath = development ? '/' : '/react-mobx-typescript-starter/';

const hashName = development
  ? '[name].[hash:4]'
  : '[name].[contenthash:4]';

module.exports = {
  root,
  hashName,
  publicPath,
  production,
  development,
  environment,
  sourceMap: false,
  publicPath: '/',
  analyze: options.analyze || false,
  compression: options.release || false,
  dist: resolve(root, 'dist'),
  sourcePath: resolve(root, 'src'),
  serverPath: resolve(root, 'src/server'),
  cacheDirectory: resolve(root, '.cache'),
}
