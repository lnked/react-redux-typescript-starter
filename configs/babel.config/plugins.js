const transformImports = require('./transformImports');

module.exports = function ({ development, production, test, legacy }) {
  const plugins = [];

  if (test) {
    return [
      [
        'macros',
        {
          styledComponents: {
            pure: true,
            ssr: !test,
            displayName: !test,
          },
        },
      ],
      [
        'styled-components',
        {
          ssr: production && !test,
          pure: !test,
          minify: production,
          sourceMap: development,
          displayName: development && !test,
          extractStatic: development,
          transpileTemplateLiterals: development,
        },
      ],
      ['@babel/plugin-proposal-export-default-from'],
      ['@babel/plugin-proposal-export-namespace-from'],
    ];
  }

  if (development) {
    plugins.push('react-refresh/babel');
  }

  return [
    ...plugins,
    ['module:fast-async', { spec: true }],
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
    ['@babel/plugin-transform-object-assign'],
    ['@babel/plugin-transform-object-set-prototype-of-to-assign'],
    ['@babel/plugin-proposal-export-default-from'],
    ['@babel/plugin-transform-react-constant-elements'],
    ['@babel/plugin-transform-react-inline-elements'],
  ];
};
