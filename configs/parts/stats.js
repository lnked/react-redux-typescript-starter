const { release } = require('../options');

module.exports = {
  stats: release ? 'verbose' : 'normal',
};
