module.exports = function ({ development, production, test, loose, useBuiltIns, modules, targets }) {
  const configs = []

  production && configs.push(
    ['@babel/preset-env', {
      loose,
      modules,
      targets,
      corejs: 2,
      useBuiltIns,
      shippedProposals: true,
      forceAllTransforms: production,
      exclude: [
        'transform-typeof-symbol',
        'transform-regenerator',
        'transform-async-to-generator',
        '@babel/plugin-transform-regenerator',
        '@babel/plugin-transform-async-to-generator',
      ],
    }]
  )

  test && configs.push('@babel/preset-env')

  return [
    ...configs,
    ['@babel/preset-react', { development }],
    ['@babel/preset-typescript'],
  ]
}
