const Rsync = require('rsync');
const { join } = require('path');

const { dist } = require('./options');

const instance = Rsync.build({
  source:       join(dist, '*'),
  flags:        'avz',
  shell:        'ssh',
  exclude:      ['.git', '.DS_Store'],
});

instance.execute((error, code, cmd) => {
  console.log('Done!', { error, code, cmd });
});
