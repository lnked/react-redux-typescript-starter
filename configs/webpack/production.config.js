const merge = require('webpack-merge');

const bail = require('../parts/bail');
const performance = require('../parts/performance');
const optimization = require('../parts/optimization');

const plugins = require('../plugins/production');

module.exports = merge(
  bail,
  plugins,
  performance,
  optimization,
);
