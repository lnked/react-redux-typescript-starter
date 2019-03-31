module.exports = function ({ development, production, test, loose, useBuiltIns, modules, targets }) {
  const configs = []

  production && configs.push(
    ['@babel/preset-env', {
      loose,
      modules,
      targets,
      useBuiltIns,
      shippedProposals: true,
      forceAllTransforms: production,
      exclude: [
        'transform-typeof-symbol',
        '@babel/plugin-transform-regenerator',
      ],
    }]
  )

  test && configs.push('@babel/preset-env')

  return [
    ...configs,
    ['@babel/preset-react', { development }],
    '@babel/preset-typescript',
    ['@emotion/babel-preset-css-prop', {
      autoLabel: true,
      labelFormat: '[local]',
      useBuiltIns: false,
      throwIfNamespace: true,
    }],
  ]
}
