const fs = require('fs');
const path = require('path');

module.exports = function fileExistsWithCaseSync(filepath) {
  const dir = path.dirname(filepath);

  if (dir === '/' || dir === '.') return true;

  const filenames = fs.readdirSync(dir);

  if (filenames.indexOf(path.basename(filepath)) === -1) {
    return false;
  }

  return fileExistsWithCaseSync(dir);
}
