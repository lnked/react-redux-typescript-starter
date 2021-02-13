module.exports = {
  ecma: undefined,
  warnings: false,
  parse: {},
  mangle: true, // Note `mangle.properties` is `false` by default.
  module: false,
  output: {
    comments: false,
  },
  compress: true,
  toplevel: false,
  nameCache: null,
  ie8: false,
  keep_classnames: false,
  keep_fnames: false,
  safari10: false,
};
