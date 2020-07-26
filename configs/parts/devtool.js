const { production } = require('../options');

const devtool = production ? false : 'inline-eval';

module.exports = {
  devtool,
};
