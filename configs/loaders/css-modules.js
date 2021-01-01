const { production } = require('../options');

module.exports = ({ ...options } = {}) => {
  return {
    loader: '@teamsupercell/typings-for-css-modules-loader',
    options: {
      ...options,
      verifyOnly: production,
    },
  };
};
