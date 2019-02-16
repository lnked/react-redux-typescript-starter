const options = require('./options');

// Presets
const preloaders = require('./presets/preloaders')
const scripts = require('./presets/scripts')
// const styles = require('./presets/styles')
const fonts = require('./presets/fonts')
const images = require('./presets/images')

module.exports = [
  preloaders,
  scripts,
  // styles,
  ...fonts,
  images,
]
