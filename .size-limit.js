module.exports = [
  {
    limit: '300 KB',
    gzip: true,
    path: [
      './dist/static/*.css',
      './dist/static/*.js',
    ],
    config: './configs/production.js',
    webpack: false,
    running: true,
  },
]
