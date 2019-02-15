const path = require('path');
const options = require('./options');

const duplicates = {
  lodash: path.resolve(options.base, 'node_modules/lodash'),
  warning: path.resolve(options.base, 'node_modules/warning'),
};

module.exports = {
  ...duplicates,
  src: options.root,
  // hocs: path.resolve(options.root, 'hocs'),
  // utils: path.resolve(options.root, 'utils'),
  // store: path.resolve(options.root, 'store'),
  // theme: path.resolve(options.root, 'theme'),
  pages: path.resolve(options.root, 'pages'),
  services: path.resolve(options.root, 'services'),
  // config: path.resolve(options.root, 'config'),
  // typings: path.resolve(options.root, 'typings'),
  // helpers: path.resolve(options.root, 'helpers'),
  // layouts: path.resolve(options.root, 'layouts'),
  // settings: path.resolve(options.root, 'settings'),
  // fragments: path.resolve(options.root, 'fragments'),
  components: path.resolve(options.root, 'components'),
  // assets: path.resolve(options.root, 'assets'),
  // images: path.resolve(options.root, 'assets/images'),
  // styles: path.resolve(options.root, 'assets/styles'),
  // scripts: path.resolve(options.root, 'assets/scripts'),
  // svgstore: path.resolve(options.root, 'assets/svgstore'),
  'styled-components': path.resolve(options.base, 'node_modules/styled-components'),
}