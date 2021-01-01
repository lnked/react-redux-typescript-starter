const { GenerateSW, InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return [
    new GenerateSW({
      skipWaiting: true,
      clientsClaim: true,
      swDest: 'sw.js',
      include: [/\.html$/, /\.js$/, /\.json$/],
      exclude: [/\.jpg$/, /\.png$/, /\.map$/, /runtime.*\.js$/, /^manifest.*\.js(?:on)?$/],
    }),
  ];
};
