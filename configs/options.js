const path = require("path")

const env = process.env.NODE_ENV || 'development';
const basePath = path.resolve(__dirname, '..')

// const webpackPublicPath = __DEV__ ? '/' : '/file-upload-example/'
// https://github.com/contentful-labs/file-upload-example/blob/f22bc6f2edb9f713eeb4e2f9917bdb6ef6978b49/config/paths.default.js

console.log(basePath);

module.exports.options = {
  env,
  base: path.resolve(basePath),
  root: path.resolve(basePath, 'src'),
  dist: path.resolve(basePath, 'dist'),
  analyze: true,
  sourceMap: false,
  compression: false,
}