const changeCase = require('change-case');

const transform = (prefix, preventFullImport) => {
  return {
    transform: importName => {
      const name = changeCase.kebabCase(importName)

      return `${prefix}/${name}`
    },
    preventFullImport,
  };
};

module.exports = {
  './components': transform('./components', true),
  '\.\.\/utils\/?(((\\w*)?\/?)*)': transform('utils', false),
  '\.\.\/pages\/?(((\\w*)?\/?)*)': transform('pages', false),
  '\.\.\/layouts\/?(((\\w*)?\/?)*)': transform('layouts', false),
  '\.\.\/services\/?(((\\w*)?\/?)*)': transform('services', false),
  '\.\.\/fragments\/?(((\\w*)?\/?)*)': transform('fragments', false),
  '\.\.\/components\/?(((\\w*)?\/?)*)': transform('components', false),
}
