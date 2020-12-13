const { merge } = require('webpack-merge');

const bail = require('../parts/bail');
const plugins = require('../plugins/production');
const performance = require('../parts/performance');
const optimization = require('../parts/optimization');

const mergedConfig = merge(bail, plugins, performance, optimization);

module.exports = mergedConfig;
