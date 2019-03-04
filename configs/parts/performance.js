const options = require('../options');

module.exports = options.production && {
  performance: {
    hints: "warning",
    maxAssetSize: 500000,
    maxEntrypointSize: 500000,
    assetFilter: assetFilename => !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
  },
}
