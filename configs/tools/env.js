const dotenv = require('dotenv')
const dotenvExpand = require('dotenv-expand')

module.exports.init = () => dotenvExpand(dotenv.config())