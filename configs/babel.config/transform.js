const findPath = require('./find-path');
const changeCase = require('change-case');
const { sourcePath } = require('../options');

const transform = (prefix, preventFullImport) => {
  return {
    transform: (importName, matches) => {
      const name = changeCase.kebabCase(importName)

      if (!preventFullImport) {
        const source = findPath(prefix, importName, (matches[1] || false))
        return source.replace(`${sourcePath}/`, '');
      }

      return `${prefix}/${name}`
    },
    preventFullImport,
  };
};

module.exports = {
  './components': transform('./components', true),
  '\.\.\/utils\/?(((\\w*)?\/?)*)': transform('utils', false),
  '\.\.\/theme\/?(((\\w*)?\/?)*)': transform('theme', false),
  '\.\.\/pages\/?(((\\w*)?\/?)*)': transform('pages', false),
  '\.\.\/layouts\/?(((\\w*)?\/?)*)': transform('layouts', false),
  '\.\.\/services\/?(((\\w*)?\/?)*)': transform('services', false),
  '\.\.\/fragments\/?(((\\w*)?\/?)*)': transform('fragments', false),
  '\.\.\/components\/?(((\\w*)?\/?)*)': transform('components', false),
}
