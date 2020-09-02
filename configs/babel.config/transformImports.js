const path = require('path');
const glob = require('glob');

const findPath = require('./find-path');
const { sourcePath } = require('../options');

const transformImports = (dirname, preventFullImport = false, skipDefaultConversion = false) => {
  return {
    preventFullImport,
    skipDefaultConversion,
    transform: (filename, importName, matches) => {
      const importPath = path.resolve(path.dirname(filename), dirname, importName);
      const importSource = importPath.replace(`${sourcePath}/`, '');

      const files = glob.sync(`${importPath}/*`);

      if (files.includes(`${importPath}/index.ts`)) {
        return path.resolve(`${importPath}/index.ts`);
      }

      if (files.includes(`${importPath}/index.tsx`)) {
        return path.resolve(`${importPath}/index.tsx`);
      }

      if (files.includes(`${importPath}.tsx`)) {
        return path.resolve(`${importPath}.tsx`);
      }

      if (files.includes(`${importPath}/${importName}.tsx`)) {
        return path.resolve(`${importPath}/${importName}.tsx`);
      }

      console.log(`${importPath}/*`, { glob: glob.sync(`${importPath}/*`) });
      console.log(`resolve(importSource)`, path.resolve(importSource));

      return path.resolve(importPath);
    },
  };
};

module.exports = {
  // '\.\/components(\/(\w*)?\/?)?': transformImports('./components', false),
  // '\.\.\/i18n\/?(((\\w*)?\/?)*)': transformImports('i18n', false, true),
  // '\.\.\/utils\/?(((\\w*)?\/?)*)': transformImports('utils', false, true),
  // '\.\.\/themes\/?(((\\w*)?\/?)*)': transformImports('themes', false, true),
  // '\.\.\/pages\/?(((\\w*)?\/?)*)': transformImports('pages'),
  // '\.\.\/layouts\/?(((\\w*)?\/?)*)': transformImports('layouts'),
  // '\.\.\/services\/?(((\\w*)?\/?)*)': transformImports('services'),
  // '\.\.\/fragments\/?(((\\w*)?\/?)*)': transformImports('fragments'),
  // '\.\.\/components\/?(((\\w*)?\/?)*)': transformImports('components'),
}
