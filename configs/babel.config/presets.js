module.exports = function ({ development, production, test, loose, useBuiltIns, targets }) {
  const configs = [];

  production &&
    configs.push([
      '@babel/preset-env',
      {
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
      },
    ]);

  test && configs.push('@babel/preset-env');

  return [...configs, ['@babel/preset-typescript'], ['@babel/preset-react', { development, runtime: 'automatic' }]];
};
