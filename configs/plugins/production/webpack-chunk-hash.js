const WebpackChunkHash = require('webpack-chunk-hash');

const options = require('../../options');

module.exports = () => {
  return [
    new WebpackChunkHash({
      algorithm: 'md5',
    }),
  ]
}
