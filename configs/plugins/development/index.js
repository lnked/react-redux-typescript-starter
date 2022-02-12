const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  plugins: [new ReactRefreshWebpackPlugin()].filter(Boolean),
};
