const { resolve } = require('path');

const { root, sourcePath } = require('./options');

const duplicates = {
  lodash: resolve(root, 'node_modules/lodash'),
  warning: resolve(root, 'node_modules/warning'),
  'history': resolve(root, 'node_modules/history'),
  'value-equal': resolve(root, 'node_modules/value-equal'),
  'resolve-pathname': resolve(root, 'node_modules/resolve-pathname'),
  'react-is': resolve(root, 'node_modules/react-is'),
  'immutable': resolve(root, 'node_modules/immutable'),
  'rc-trigger': resolve(root, 'node_modules/rc-trigger'),
  'rc-animate': resolve(root, 'node_modules/rc-animate'),
  'create-react-context': resolve(root, 'node_modules/create-react-context'),
  'hoist-non-react-statics': resolve(root, 'node_modules/hoist-non-react-statics'),
  '@babel/runtime': resolve(root, 'node_modules/@babel/runtime'),
  'react-dom': '@hot-loader/react-dom',
};

const noParse = {
  axios: resolve(root, 'node_modules/dist/axios.min.js'),
};

module.exports = {
  ...noParse,
  ...duplicates,
  src: sourcePath,
  app: resolve(sourcePath, 'app'),
  i18n: resolve(sourcePath, 'i18n'),
  utils: resolve(sourcePath, 'utils'),
  hooks: resolve(sourcePath, 'hooks'),
  store: resolve(sourcePath, 'store'),
  pages: resolve(sourcePath, 'pages'),
  themes: resolve(sourcePath, 'themes'),
  assets: resolve(sourcePath, 'assets'),
  layouts: resolve(sourcePath, 'layouts'),
  services: resolve(sourcePath, 'services'),
  settings: resolve(sourcePath, 'settings'),
  fragments: resolve(sourcePath, 'fragments'),
  components: resolve(sourcePath, 'components'),
  decorators: resolve(sourcePath, 'decorators'),
  svgstore: resolve(sourcePath, 'assets/svgstore'),
};
