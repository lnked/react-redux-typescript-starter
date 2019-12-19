const { resolve } = require('path');
const kebabCase = require('kebab-case');
const changeCase = require('change-case');

module.exports = function getPaths(dir, name) {
  const kebabCaseReverseName = kebabCase.reverse(name)
  const kebabCaseName = kebabCase(name)
  const snakeCaseName = changeCase.snakeCase(name)
  const camelCaseName = changeCase.camelCase(name)
  const pascalCaseName = changeCase.pascalCase(name)

  const paths = [
    resolve(dir, name),
    resolve(dir, kebabCaseName),
    resolve(dir, kebabCaseReverseName),
    resolve(dir, snakeCaseName),
    resolve(dir, camelCaseName),
    resolve(dir, pascalCaseName),
  ];

  return paths.filter((i, pos) => paths.indexOf(i) == pos);
};
