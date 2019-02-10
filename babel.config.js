module.exports = function (api) {
  // console.log('api:', api)
  // The API exposes the following:

  // Cache the returned value forever and don't call this function again.
  // api.cache(true);

  // Don't cache at all. Not recommended because it will be very slow.
  api.cache(false);

  // // Cached based on the value of some function. If this function returns a value different from
  // // a previously-encountered value, the plugins will re-evaluate.
  // var env = api.cache(() => process.env.NODE_ENV);

  // // If testing for a specific env, we recommend specifics to avoid instantiating a plugin for
  // // any possible NODE_ENV value that might come up during plugin execution.
  // var isProd = api.cache(() => process.env.NODE_ENV === "production");

  // // .cache(fn) will perform a linear search though instances to find the matching plugin based
  // // based on previous instantiated plugins. If you want to recreate the plugin and discard the
  // // previous instance whenever something changes, you may use:
  // var isProd = api.cache.invalidate(() => process.env.NODE_ENV === "production");

  // Note, we also expose the following more-verbose versions of the above examples:
  // api.cache.forever(); // api.cache(true)
  // api.cache.never();   // api.cache(false)
  // api.cache.using(fn); // api.cache(fn)

  // const web = api.caller((caller) => Boolean(caller && caller.target === 'web'))
  // const babel = api.caller((caller) => Boolean(caller && caller.name === 'babel-loader'))

  // const test = api.env('test')
  // const production = api.env('production')
  // const development = api.env('development')

  // const loose = true
  // const legacy = true
  // const useBuiltIns = web ? 'usage' : undefined
  // const targets = !web ? { node: 'current' } : undefined
  // const modules = babel ? false : 'commonjs'

  // const presets = getPresets({ loose, useBuiltIns, production, modules, targets })
  // const plugins = getPlugins({ loose, legacy, useBuiltIns, test, development, production })
  // const ignore = getIgnore({ test, production })

  // const overrides = []

  // const sourceMaps = production

  // const env = getEnv()

  return {
    presets: [
      ['@babel/preset-env', {
        useBuiltIns: 'entry',
        modules: false,
        targets: {
          node: 'current',
        },
      }],
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
      'transform-react-remove-prop-types',
      // '@babel/plugin-transform-object-assign',
      // '@babel/plugin-transform-arrow-functions',
      '@babel/plugin-proposal-object-rest-spread',
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      // ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
      '@babel/plugin-transform-react-constant-elements',
      '@babel/plugin-transform-react-inline-elements',
      ['babel-plugin-styled-components', {
        ssr: true,
        pure: true,
        minify: true,
        fileName: false,
        displayName: true,
      }],
      ["module-resolver", {
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ],
        "root": [
          "./src"
        ]
      }],
    ],
    sourceMaps: true,
    // comments: true,
    // ignore: ignore.filter(Boolean),
    // presets: presets.filter(Boolean),
    // plugins: plugins.filter(Boolean),
    // overrides: overrides.filter(Boolean),
    // env,
  }
}
