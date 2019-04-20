const { resolve } = require('path');
const changeCase = require('change-case');

module.exports = function getPaths(dir, name) {
  const kebabCase = changeCase.kebabCase(name)
  const snakeCase = changeCase.snakeCase(name)
  const camelCase = changeCase.camelCase(name)
  const pascalCase = changeCase.pascalCase(name)

  const paths = [
    resolve(dir, kebabCase),
    resolve(dir, snakeCase),
    resolve(dir, camelCase),
    resolve(dir, pascalCase),
  ];

  return paths.filter((i, pos) => paths.indexOf(i) == pos);
};
