const merge = require('webpack-merge')

const mode = require('../parts/mode');
const node = require('../parts/node');
const bail = require('../parts/bail');
const entry = require('../parts/entry');
const stats = require('../parts/stats');
const output = require('../parts/output');
const target = require('../parts/target');
const modules = require('../parts/module');
const plugins = require('../parts/plugins');
const resolve = require('../parts/resolve');
const devServer = require('../parts/dev-server');
const externals = require('../parts/externals');
const performance = require('../parts/performance');

module.exports = merge(
  mode,
  node,
  bail,
  entry,
  modules,
  output,
  plugins,
  resolve,
  stats,
  target,
  devServer,
  externals,
  performance,
);
