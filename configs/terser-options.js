const path = require('path');
const options = require('./options');

module.exports = {
  ecma: 6,
  warnings: false,
  mangle: true, // Note `mangle.properties` is `false` by default.
  module: false,
  output: null,
  toplevel: false,
  nameCache: null,
  ie8: false,
  keep_classnames: undefined,
  keep_fnames: false,
  safari10: true,
  parse: {
    html5_comments: false,
  },
  compress: {
    ecma: 5,
    inline: false,
    sequences: true,
    comparisons: true,
    conditionals: true,
    evaluate: true,
    booleans: true,
    loops: true,
    unused: true,
    unsafe: false,
    warnings: false,
    hoist_funs: true,
    if_return: true,
    join_vars: true,
    dead_code: true,
    drop_console: true,
    drop_debugger: true,
    global_defs: {
      DEBUG: false,
    },
    passes: 5,
  },
  output: {
    ecma: 5,
    ascii_only: true,
    comments: false,
    beautify: false,
    indent_level: 0,
  },
}
