const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = () => [
  new GenerateSW({
    skipWaiting: true,
    clientsClaim: true,
    swDest: 'sw.js',
    include: [/\.html$/, /\.js$/, /\.json$/],
    exclude: [/\.jpg$/, /\.png$/, /\.map$/, /runtime.*\.js$/, /^manifest.*\.js(?:on)?$/],
  }),
];
