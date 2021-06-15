module.exports = function ({ development, production, test, loose, useBuiltIns, targets }) {
  let options = {};

  if (production) {
    options = {
      loose,
      targets,
      corejs: '3.0.0',
      useBuiltIns,
      modules: false,
      shippedProposals: true,
      forceAllTransforms: production,
      exclude: [
        'transform-typeof-symbol',
        'transform-regenerator',
        'transform-async-to-generator',
        '@babel/plugin-transform-regenerator',
        '@babel/plugin-transform-async-to-generator',
      ],
    };
  }

  return [
    ['@babel/preset-env', options],
    ['@babel/preset-typescript'],
    [
      '@babel/preset-react',
      {
        development,
        runtime: 'automatic',
        importSource: '@welldone-software/why-did-you-render',
      },
    ],
  ];
};
