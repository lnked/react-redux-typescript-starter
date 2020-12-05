const { production } = require('../options');

const devtool = production ? 'source-map' : 'eval-cheap-source-map';

module.exports = {
  devtool,
};
