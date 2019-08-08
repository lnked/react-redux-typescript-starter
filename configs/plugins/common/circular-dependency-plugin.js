const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = () => {
  return [
    new CircularDependencyPlugin(),
  ]
}
