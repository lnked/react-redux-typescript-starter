// const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
// const styledComponentsTransformer = createStyledComponentsTransformer();

const { development, cacheDirectory } = require('../options');

module.exports = () => {
  return {
    loader: 'babel-loader',
    options: {
      cacheDirectory,
    }
  };
}
