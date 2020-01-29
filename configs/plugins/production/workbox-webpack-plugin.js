const { GenerateSW, InjectManifest } = require('workbox-webpack-plugin');

const options = require('../../options');

module.exports = () => {
  return [
    new GenerateSW({
      swDest: 'sw.js',
      include: [/\.html$/, /\.js$/, /\.json$/],
      exclude: [/\.jpg$/, /\.png$/, /\.map$/, /runtime.*\.js$/, /^manifest.*\.js(?:on)?$/],
    }),
  ]
}

