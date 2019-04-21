const findPath = require('./find-path');
const changeCase = require('change-case');
const { sourcePath } = require('../options');

const transform = (prefix, preventFullImport = false, skipDefaultConversion = false) => {
  return {
    transform: (importName, matches) => {
      const name = changeCase.kebabCase(importName)

      if (!preventFullImport) {
        const source = findPath(prefix, importName, (matches[1] || false)).replace(`${sourcePath}/`, '')
        return source;
      }

      return `${prefix}/${name}`
    },
    preventFullImport,
    skipDefaultConversion,
  };
};

module.exports = {
  './components': transform('./components', true),
  '\.\.\/utils\/?(((\\w*)?\/?)*)': transform('utils', false, true),
  '\.\.\/theme\/?(((\\w*)?\/?)*)': transform('theme', false, true),
  '\.\.\/pages\/?(((\\w*)?\/?)*)': transform('pages'),
  '\.\.\/layouts\/?(((\\w*)?\/?)*)': transform('layouts'),
  '\.\.\/services\/?(((\\w*)?\/?)*)': transform('services'),
  '\.\.\/fragments\/?(((\\w*)?\/?)*)': transform('fragments'),
  '\.\.\/components\/?(((\\w*)?\/?)*)': transform('components'),
}
