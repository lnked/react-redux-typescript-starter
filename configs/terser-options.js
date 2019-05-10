const options = require('./options');

module.exports = {
  ecma: 5,
  warnings: false,
  mangle: true, // Note `mangle.properties` is `false` by default.
  module: false,
  toplevel: false,
  nameCache: null,
  ie8: false,
  keep_classnames: undefined,
  safari10: true,
  keep_fnames: !options.release,
  compressor: {
    warnings: false,
  },
  parse: {
    html5_comments: false,
  },
  compress: {
    ecma: 5,
    passes: 5,
    global_defs: {
      DEBUG: false,
    },
    unsafe: false,
    drop_console: true,
    drop_debugger: true,

    arrows: false,
    booleans: true,
    warnings: false,
    comparisons: true,
    collapse_vars: false,
    computed_props: false,
    hoist_funs: false,
    hoist_props: false,
    hoist_vars: false,
    if_return: true,
    inline: false,
    join_vars: true,
    keep_infinity: true,
    loops: true,
    negate_iife: false,
    properties: false,
    reduce_funcs: false,
    reduce_vars: false,
    sequences: false,
    side_effects: false,
    switches: false,
    top_retain: false,
    toplevel: false,
    typeofs: false,
    unused: true,

    // Switch off all types of compression except those needed to convince
    // react-devtools that we're using a production build
    conditionals: true,
    dead_code: true,
    evaluate: true,
  },
  output: {
    ecma: 5,
    ascii_only: true,
    comments: false,
    beautify: false,
    indent_level: 0,
  },
}
