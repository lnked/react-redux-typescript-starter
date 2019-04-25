const path = require('path');
const options = require('./options');

const duplicates = {
  lodash: path.resolve(options.root, 'node_modules/lodash'),
  warning: path.resolve(options.root, 'node_modules/warning'),
  'react-is': path.resolve(options.root, 'node_modules/react-is'),
  'immutable': path.resolve(options.root, 'node_modules/immutable'),
  'rc-trigger': path.resolve(options.root, 'node_modules/rc-trigger'),
  'rc-animate': path.resolve(options.root, 'node_modules/rc-animate'),
  'create-react-context': path.resolve(options.root, 'node_modules/create-react-context'),
  'hoist-non-react-statics': path.resolve(options.root, 'node_modules/hoist-non-react-statics'),
  '@babel/runtime': path.resolve(options.root, 'node_modules/@babel/runtime'),
};

module.exports = {
  ...duplicates,
  src: options.sourcePath,
  app: path.resolve(options.sourcePath, 'app'),
  i18n: path.resolve(options.sourcePath, 'i18n'),
  utils: path.resolve(options.sourcePath, 'utils'),
  hooks: path.resolve(options.sourcePath, 'hooks'),
  store: path.resolve(options.sourcePath, 'store'),
  pages: path.resolve(options.sourcePath, 'pages'),
  theme: path.resolve(options.sourcePath, 'theme'),
  assets: path.resolve(options.sourcePath, 'assets'),
  layouts: path.resolve(options.sourcePath, 'layouts'),
  services: path.resolve(options.sourcePath, 'services'),
  settings: path.resolve(options.sourcePath, 'settings'),
  fragments: path.resolve(options.sourcePath, 'fragments'),
  components: path.resolve(options.sourcePath, 'components'),
  decorators: path.resolve(options.sourcePath, 'decorators'),
  svgstore: path.resolve(options.sourcePath, 'assets/svgstore'),
};
