const { production } = require('../options');

const devtool = production ? false : 'eval-cheap-module-source-map';

module.exports = {
  devtool,
};
