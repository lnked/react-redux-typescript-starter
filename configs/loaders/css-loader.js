const { development, sourcePath } = require('../options');

module.exports = ({ importLoaders = 1, ...props }) => {
  return {
    loader: 'css-loader',
    options: {
      ...props,
      modules: {
        mode: 'local',
        localIdentName: development ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:5]',
        context: sourcePath,
      },
      importLoaders,
    }
  };
}
