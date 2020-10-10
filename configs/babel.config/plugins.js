const transformImports = require('./transformImports');

module.exports = function({ development, production, test, loose, legacy }) {
  const plugins = [];

  if (test) {
    return [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-export-default-from',
      '@babel/plugin-proposal-export-namespace-from',
    ];
  }

  if (development) {
    plugins.push(
      'react-hot-loader/babel'
    );
  }

  return [
    ...plugins,
    ['macros'],
    ['module:fast-async', { spec: true }],
    ['@loadable/babel-plugin'],
    ['babel-plugin-styled-components', {
      ssr: production && !test,
      minify: production,
      sourceMap: development,
      displayName: production && !test,
      extractStatic: development,
      transpileTemplateLiterals: development,
    }],
    ['transform-react-remove-prop-types', {
      mode: 'remove',
      removeImport: true,
      ignoreFilenames: ['node_modules'],
    }],
    ['@babel/plugin-transform-runtime', {
      corejs: 3,
      helpers: false,
      proposals: true,
    }],
    ['transform-imports', transformImports],
    ['@babel/plugin-proposal-decorators', { legacy }],
    ['@babel/plugin-transform-spread', { loose }],
    ['@babel/plugin-proposal-optional-chaining', { loose }],
    ['@babel/plugin-proposal-nullish-coalescing-operator', { loose }],
    ['@babel/plugin-proposal-class-properties', { loose }],
    ['@babel/plugin-transform-template-literals', { loose }],
    ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }],

    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-object-assign',
    '@babel/plugin-transform-object-set-prototype-of-to-assign',

    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-transform-react-constant-elements',
    '@babel/plugin-transform-react-inline-elements',
  ];
};
