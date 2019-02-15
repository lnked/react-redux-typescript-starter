const path = require("path")
const { parseArguments } = require('./tools/helpers')

const env = process.env.NODE_ENV || 'development';
const base = path.resolve(__dirname, '..')
const options = parseArguments(process.argv)

process.env.NODE_ENV = process.env.BABEL_ENV = env;

const isDevelopment = env === 'development'

const publicPath = isDevelopment ? '/' : '/react-mobx-typescript-starter/'

console.log('options: ', options);

module.exports = {
  env,
  base,
  root: path.resolve(base, 'src'),
  dist: path.resolve(base, 'dist'),
  analyze: options.analyze || false,
  publicPath,
  sourceMap: false,
  compression: false,
  cacheDirectory: path.resolve(base, '.cache'),
}
