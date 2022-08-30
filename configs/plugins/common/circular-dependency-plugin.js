const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = () => [
  new CircularDependencyPlugin({
    exclude: /node_modules/,
  }),
];
