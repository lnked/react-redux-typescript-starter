const colors = require('colors');
const Rsync = require('rsync');
const { join } = require('path');

const { dist } = require('../options');
const { environment } = require('./env');

const user = environment.SECRET_DEPLOY_SERVER_USER;
const ipAddress = environment.SECRET_DEPLOY_SERVER_IP;
const destination = environment.SECRET_DEPLOY_SERVER_DEST;

const instance = Rsync.build({
  flags:        ['a', 'v', 'z', 'progress'],
  shell:        'ssh',
  source:       join(dist, '*'),
  destination:  `${user}@${ipAddress}:${destination}`,
  exclude:      ['.git', '.DS_Store'],
});

const codes = {
  0: 'Success',
  1: 'Syntax or usage error',
  2: 'Protocol incompatibility',
  3: 'Errors selecting input/output files, dirs',
  4: 'Requested action not supported: an attempt was made to manipulate 64-bit\nfiles on a platform that cannot support them; or an option was specified\nthat is supported by the client and not by the server.',
  5: 'Error starting client-server protocol',
  6: 'Daemon unable to append to log-file',
  10: 'Error in socket I/O',
  11: 'Error in file I/O',
  12: 'Error in rsync protocol data stream',
  13: 'Errors with program diagnostics',
  14: 'Error in IPC code',
  20: 'Received SIGUSR1 or SIGINT',
  21: 'Some error returned by waitpid()',
  22: 'Error allocating core memory buffers',
  23: 'Partial transfer due to error',
  24: 'Partial transfer due to vanished source files',
  25: 'The --max-delete limit stopped deletions',
  30: 'Timeout in data send/receive',
  35: 'Timeout waiting for daemon connection',
};

instance.execute((error, code) => {
  console.log(colors.bold.green(codes[code]));

  if (error !== null) {
    console.log('ERROR!', colors.bold.red(codes[code]));
  }
});
