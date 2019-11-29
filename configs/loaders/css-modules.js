const { development, sourcePath } = require('../options');

module.exports = ({ ...props } = {}) => {
  return {
    loader: '@teamsupercell/typings-for-css-modules-loader',
    options: {
      ...props,
    }
  };
}
