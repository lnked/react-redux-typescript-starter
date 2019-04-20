const findPath = require('./find-path');

const transform = (prefix, preventFullImport) => {
  return {
    transform: (importName, matches) => {
      return findPath(prefix, importName, (matches[1] || false))
    },
    preventFullImport,
  };
};

module.exports = {
  '\.\.\/utils\/?(((\\w*)?\/?)*)': transform('utils', false),
  '\.\.\/theme\/?(((\\w*)?\/?)*)': transform('theme', false),
  '\.\.\/pages\/?(((\\w*)?\/?)*)': transform('pages', false),
  '\.\.\/layouts\/?(((\\w*)?\/?)*)': transform('layouts', false),
  '\.\.\/services\/?(((\\w*)?\/?)*)': transform('services', false),
  '\.\.\/fragments\/?(((\\w*)?\/?)*)': transform('fragments', false),
  '\.\.\/components\/?(((\\w*)?\/?)*)': transform('components', false),
}
