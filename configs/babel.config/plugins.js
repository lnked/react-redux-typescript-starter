const transformImports = require('./transformImports');

module.exports = function ({ development, production, test, loose, legacy }) {
  const plugins = [];

  if (test) {
    return ['@babel/plugin-proposal-export-default-from', '@babel/plugin-proposal-export-namespace-from'];
  }

  if (development) {
    plugins.push('react-refresh/babel');
  }

  return [
    ...plugins,
    ['macros'],
    ['module:fast-async', { spec: true }],
    [
      'babel-plugin-styled-components',
      {
        ssr: production && !test,
        minify: production,
        sourceMap: development,
        displayName: production && !test,
        extractStatic: development,
        transpileTemplateLiterals: development,
      },
    ],
    [
      'transform-react-remove-prop-types',
      {
        mode: 'remove',
        removeImport: true,
      },
    ],
    [
      '@babel/plugin-transform-runtime',
      {
        absoluteRuntime: false,
        corejs: false,
        helpers: true,
        regenerator: true,
        useESModules: false,
      },
    ],
    ['transform-imports', transformImports],
    ['@babel/plugin-proposal-decorators', { legacy }],
    ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }],
    '@babel/plugin-transform-object-assign',
    '@babel/plugin-transform-object-set-prototype-of-to-assign',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-transform-react-constant-elements',
    '@babel/plugin-transform-react-inline-elements',
  ];
};
