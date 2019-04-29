const fs = require('fs');
const dotenv = require('dotenv');
const { resolve } = require('path');

const { environment, root } = require('../options');

const defaultFile = resolve(root, '.env');

let envFile = resolve(root, `.env.${environment}`);

if (!fs.existsSync(envFile)) {
  envFile = defaultFile;
}

const { parsed } = dotenv.config({
  path: envFile,
});

module.exports.config = parsed
