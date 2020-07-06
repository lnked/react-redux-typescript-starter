const { merge } = require('webpack-merge');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

const bail = require('../parts/bail');
const plugins = require('../plugins/production');
const performance = require('../parts/performance');
const optimization = require('../parts/optimization');

const { analyze } = require('../options');

const smp = new SpeedMeasurePlugin();

const mergedConfig = merge(
  bail,
  plugins,
  performance,
  optimization,
);

module.exports = analyze
  ? smp.wrap(mergedConfig)
  : mergedConfig;
