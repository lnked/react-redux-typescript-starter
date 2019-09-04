const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = () => {
  return [
    new CaseSensitivePathsPlugin(),
  ]
}
