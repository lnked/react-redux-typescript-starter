const changeCase = require('change-case');

const findPath = require('./find-path');
const { sourcePath } = require('../options');

const transformImports = (dirname, preventFullImport = false, skipDefaultConversion = false) => {
  return {
    preventFullImport,
    skipDefaultConversion,
    transform: (importName, matches) => {
      const name = changeCase.pascalCase(importName);

      if (!preventFullImport) {
        return findPath(dirname, importName, (matches[1] || false)).replace(`${sourcePath}/`, '');
      }

      return `${dirname}/${name}`;
    },
  };
};

module.exports = {
  '\./components': transformImports('./components', true),
  '\.\.\/i18n\/?(((\\w*)?\/?)*)': transformImports('i18n', false, true),
  '\.\.\/utils\/?(((\\w*)?\/?)*)': transformImports('utils', false, true),
  '\.\.\/themes\/?(((\\w*)?\/?)*)': transformImports('themes', false, true),
  '\.\.\/pages\/?(((\\w*)?\/?)*)': transformImports('pages'),
  '\.\.\/layouts\/?(((\\w*)?\/?)*)': transformImports('layouts'),
  '\.\.\/services\/?(((\\w*)?\/?)*)': transformImports('services'),
  '\.\.\/fragments\/?(((\\w*)?\/?)*)': transformImports('fragments'),
  '\.\.\/components\/?(((\\w*)?\/?)*)': transformImports('components'),
}
