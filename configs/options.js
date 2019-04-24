const path = require("path");
const { parseArguments } = require('./tools/helpers');

const env = process.env.NODE_ENV || 'development';
const root = path.resolve(__dirname, '..');
const options = parseArguments(process.argv);

process.env.NODE_ENV = process.env.BABEL_ENV = env;

const isDevelopment = env === 'development';
const isProduction = env === 'production';

const publicPath = isDevelopment ? '/' : '/react-mobx-typescript-starter/';

const hashName = isDevelopment
  ? '[name].[hash:4]'
  : '[name].[contenthash:4]';

module.exports = {
  env,
  root,
  hashName,
  publicPath,
  sourceMap: false,
  production: isProduction,
  development: isDevelopment,
  environment: env,
  analyze: options.analyze || false,
  compression: options.release || false,
  dist: path.resolve(root, 'dist'),
  sourcePath: path.resolve(root, 'src'),
  serverPath: path.resolve(root, 'src/server'),
  cacheDirectory: path.resolve(root, '.cache'),
}
