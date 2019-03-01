module.exports = function ({ development, production, test, loose, useBuiltIns, modules, targets }) {
  const configs = []

  production && configs.push(
    ['@babel/preset-env', {
      loose,
      debug: true,
      modules,
      targets,
      useBuiltIns,
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
