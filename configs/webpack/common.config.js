const path = require('path');
const merge = require('webpack-merge')

const mode = require('../parts/mode');
const node = require('../parts/node');
const entry = require('../parts/entry');
const stats = require('../parts/stats');
const target = require('../parts/target');
const output = require('../parts/output');
const resolve = require('../parts/resolve');
const plugins = require('../parts/plugins');
const modules = require('../parts/module');

module.exports = merge(
  mode,
  node,
  entry,
  modules,
  output,
  plugins,
  resolve,
  stats,
  target,
);
