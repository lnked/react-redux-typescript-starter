const config = require('../parts/resolve');
const fsExistsSyncWithCase = require('./fs-exists-sync-with-case');

module.exports = function findRealExtention(paths) {
  const { extensions } = config.resolve;

  let dirname = '';

  paths.forEach((dir) => {
    const ext = extensions.find(e => fsExistsSyncWithCase(dir + e));

    if (ext) {
      dirname = dir + ext;
    }
  });

  return dirname;
};
