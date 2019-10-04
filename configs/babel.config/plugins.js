const transforms = require('./transform');

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
    ['module:fast-async', { spec: true }],
    ['babel-plugin-styled-components', {
      ssr: production,
      minify: production,
      pure: true,
      fileName: false,
      sourceMap: true,
      displayName: false,
      extractStatic: false,
      transpileTemplateLiterals: false,
    }],
    ['transform-react-remove-prop-types', {
      mode: 'remove',
      removeImport: true,
      ignoreFilenames: ['node_modules'],
    }],
    ['@babel/plugin-transform-runtime', {
      // corejs: 3,
      corejs: false,
      helpers: false,
      proposals: true,
      regenerator: true,
    }],
    ['transform-imports', transforms],
    ['@babel/plugin-proposal-decorators', { legacy }],
    ['@babel/plugin-transform-spread', { loose }],
    ['@babel/plugin-proposal-class-properties', { loose }],
    ['@babel/plugin-transform-template-literals', { loose }],
    '@babel/plugin-transform-react-jsx',

    '@babel/plugin-transform-object-assign',
    '@babel/plugin-transform-object-set-prototype-of-to-assign',

    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-transform-react-constant-elements',
    '@babel/plugin-transform-react-inline-elements',
  ];
};
