const { resolve } = require('path');
const { parseArguments } = require('./tools/helpers');

const isModern = process.env.BROWSERS_ENV === 'modern';
const environment = process.env.NODE_ENV || 'development';
const root = resolve(__dirname, '..');
const options = parseArguments(process.argv);
const prefix = isModern ? 'modern' : 'fallback';

process.env.NODE_ENV = process.env.BABEL_ENV = environment;

const distName = 'dist';
const production = environment === 'production';
const development = environment === 'development';

const publicPath = development ? '' : '';

const hashName = development
  ? '[name]'
  : '[name].[contenthash:6]';

const fileName = development
  ? '[path][name].[ext]'
  : '[name].[contenthash].[ext]';

module.exports = {
  root,
  prefix,
  isModern,
  hashName,
  fileName,
  distName,
  publicPath,
  production,
  development,
  environment,
  preload: false,
  prefetch: ['**/*.js'],
  sourceMap: false,
  release: options.release || options.analyze || false,
  analyze: options.analyze || false,
  compression: options.release || false,
  dist: resolve(root, distName),
  public: resolve(root, 'public'),
  stylesPath: resolve(root, distName, 'css'),
  staticPath: 'static',
  sourcePath: resolve(root, 'src'),
  serverPath: resolve(root, 'src/server'),
  cacheDirectory: resolve(root, '.cache'),
}
