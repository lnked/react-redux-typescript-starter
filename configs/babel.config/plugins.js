const transforms = require('./transform');

module.exports = function({ development, production, test, loose, legacy }) {
  const plugins = [];

  if (test) {
    return [
      '@babel/plugin-transform-runtime',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-export-default-from',
      '@babel/plugin-proposal-export-namespace-from',
    ];
  }

  if (development) {
    plugins.push('react-hot-loader/babel')
  }

  return [
    ...plugins,
    ['emotion', {
      sourceMap: true,
      extractStatic: false,
    }],
    ['@babel/plugin-transform-runtime', {
      corejs: false,
      helpers: false,
      regenerator: true,
    }],
    ['transform-react-remove-prop-types', {
      mode: 'remove',
      removeImport: true,
      ignoreFilenames: ['node_modules'],
    }],
    ['transform-imports', transforms],
    ['@babel/plugin-proposal-decorators', { legacy }],
    ['@babel/plugin-proposal-class-properties', { loose }],

    '@babel/plugin-syntax-async-generators',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-react-jsx',

    '@babel/plugin-transform-arrow-functions',
    '@babel/plugin-transform-block-scoped-functions',
    '@babel/plugin-transform-block-scoping',
    '@babel/plugin-transform-classes',
    '@babel/plugin-transform-computed-properties',
    '@babel/plugin-transform-destructuring',
    '@babel/plugin-transform-duplicate-keys',
    '@babel/plugin-transform-for-of',
    '@babel/plugin-transform-function-name',
    '@babel/plugin-transform-literals',
    '@babel/plugin-transform-new-target',
    '@babel/plugin-transform-object-super',
    '@babel/plugin-transform-parameters',
    '@babel/plugin-transform-shorthand-properties',
    '@babel/plugin-transform-spread',
    '@babel/plugin-transform-sticky-regex',
    '@babel/plugin-transform-template-literals',
    '@babel/plugin-transform-typeof-symbol',
    '@babel/plugin-transform-unicode-regex',
    '@babel/plugin-transform-object-assign',
    '@babel/plugin-transform-object-set-prototype-of-to-assign',
    '@babel/plugin-transform-exponentiation-operator',
    '@babel/plugin-transform-regenerator',
    '@babel/plugin-transform-async-to-generator',
    '@babel/plugin-transform-dotall-regex',

    '@babel/plugin-proposal-async-generator-functions',
    '@babel/plugin-proposal-optional-catch-binding',
    '@babel/plugin-proposal-unicode-property-regex',

    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-transform-react-constant-elements',
    '@babel/plugin-transform-react-inline-elements',
    ['module-resolver', {
      'extensions': ['.ts', '.js', '.tsx', '.jsx'],
      'root': ['./src'],
    }],
  ];
};
