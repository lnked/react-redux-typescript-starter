const { resolve } = require('path');
const kebabCase = require('kebab-case');
const changeCase = require('change-case');

const trim = require('./trim');

module.exports = function getPaths(dir, name) {
  const kebabName = trim(kebabCase(name));
  const kebabCaseName = kebabCase(name)
  const lowerCaseName = name.toLowerCase();
  const snakeCaseName = changeCase.snakeCase(name)
  const camelCaseName = changeCase.camelCase(name)
  const pascalCaseName = changeCase.pascalCase(name)

  const paths = [
    resolve(dir, name),
    resolve(dir, kebabName),
    resolve(dir, lowerCaseName),
    resolve(dir, kebabCaseName),
    resolve(dir, snakeCaseName),
    resolve(dir, camelCaseName),
    resolve(dir, pascalCaseName),
  ];

  return paths.filter((i, pos) => paths.indexOf(i) == pos);
};
