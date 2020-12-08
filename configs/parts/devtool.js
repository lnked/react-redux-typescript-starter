const { production } = require('../options');

const devtool = production ? 'inline-source-map' : 'eval-cheap-source-map';

module.exports = {
  devtool,
};
