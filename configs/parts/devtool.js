const { production } = require('../options');

// const devtool = production ? false : 'eval-cheap-module-source-map';
const devtool = 'source-map';

module.exports = {
  devtool,
};
