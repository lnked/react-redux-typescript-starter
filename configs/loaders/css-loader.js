const { development, sourcePath } = require('../options');

module.exports = ({ importLoaders = 1, ...props }) => {
  return {
    loader: 'css-loader',
    options: {
      ...props,
      modules: {
        localIdentContext: sourcePath,
        localIdentName: development ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:5]',
        mode: 'local',
      },
      importLoaders,
    }
  };
}
