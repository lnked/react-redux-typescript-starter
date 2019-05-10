const options = require('../options');

const devtool = options.production ? false : 'cheap-eval-source-map';

module.exports = {
  devtool,
};
