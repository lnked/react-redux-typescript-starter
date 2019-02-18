const path = require("path");
const options = require("./options");

const duplicates = {
  lodash: path.resolve(options.root, "node_modules/lodash"),
  warning: path.resolve(options.root, "node_modules/warning"),
};

module.exports = {
  ...duplicates,
  "@": options.source,
  "@/app": path.resolve(options.source, "app"),
  // hocs: path.resolve(options.source, 'hocs'),
  // utils: path.resolve(options.source, 'utils'),
  // store: path.resolve(options.source, 'store'),
  // theme: path.resolve(options.source, 'theme'),
  "@/pages": path.resolve(options.source, "pages"),
  "@/services": path.resolve(options.source, "services"),
  // config: path.resolve(options.source, 'config'),
  // typings: path.resolve(options.source, 'typings'),
  // helpers: path.resolve(options.source, 'helpers'),
  // layouts: path.resolve(options.source, 'layouts'),
  // settings: path.resolve(options.source, 'settings'),
  "@/fragments": path.resolve(options.source, "fragments"),
  "@/components": path.resolve(options.source, "components"),
  "@/containers": path.resolve(options.source, "containers"),
  // assets: path.resolve(options.source, 'assets'),
  // images: path.resolve(options.source, 'assets/images'),
  // styles: path.resolve(options.source, 'assets/styles'),
  // scripts: path.resolve(options.source, 'assets/scripts'),
  // svgstore: path.resolve(options.source, 'assets/svgstore'),
  "styled-components": path.resolve(options.root, "node_modules/styled-components"),
};
