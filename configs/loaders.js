const options = require('./options');

// Presets
const preloaders = require('./presets/preloaders');
const markdown = require('./presets/markdown');
const scripts = require('./presets/scripts');
// const styles = require('./presets/styles')
const images = require('./presets/images');
const fonts = require('./presets/fonts');
const json = require('./presets/json');

module.exports = [
  ...preloaders(),
  ...scripts(),
  ...markdown(),
  // ...styles(),
  ...fonts(),
  ...images(),
  ...json(),
];
