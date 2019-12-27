const config = require('../parts/resolve');
const getPaths = require('./get-paths');
const findRealExtention = require('./find-real-extention');
const fsExistsSyncWithCase = require('./fs-exists-sync-with-case');

module.exports = function findPath(prefix, name, realName) {
  let dirname = '';

  const { alias } = config.resolve;

  const paths = getPaths(alias[prefix], (realName || name));

  dirname = paths.find(f => fsExistsSyncWithCase(f));

  if (!dirname) {
    dirname = findRealExtention(paths);
  }

  if (dirname) {
    return dirname;
  }

  return `${prefix}/${(realName || name)}`;
};
