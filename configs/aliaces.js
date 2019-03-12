const path = require('path');
const options = require('./options');

const duplicates = {
  lodash: path.resolve(options.root, 'node_modules/lodash'),
  warning: path.resolve(options.root, 'node_modules/warning'),
  'hoist-non-react-statics': path.resolve(options.root, 'node_modules/hoist-non-react-statics'),
};

module.exports = {
  ...duplicates,
  src: options.source,
  app: path.resolve(options.source, 'app'),
  i18n: path.resolve(options.source, 'i18n'),
  utils: path.resolve(options.source, 'utils'),
  store: path.resolve(options.source, 'store'),
  pages: path.resolve(options.source, 'pages'),
  theme: path.resolve(options.source, 'theme'),
  layouts: path.resolve(options.source, 'layouts'),
  services: path.resolve(options.source, 'services'),
  settings: path.resolve(options.source, 'settings'),
  fragments: path.resolve(options.source, 'fragments'),
  components: path.resolve(options.source, 'components'),
  assets: path.resolve(options.source, 'assets'),
  svgstore: path.resolve(options.source, 'assets/svgstore'),
};
