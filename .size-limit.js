module.exports = [
  {
    gzip: true,
    limit: '300 KB',
    path: [
      './dist/static/*.js',
      './dist/static/*.css',
    ],
  },
]
