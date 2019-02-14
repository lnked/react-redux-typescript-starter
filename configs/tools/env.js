const path = require('path')
const dotenv = require('dotenv')
const variableExpansion = require('dotenv-expand')

const envName = '.example'

module.exports.init = () => variableExpansion(dotenv.config({
  path: path.resolve(process.cwd(), `.env${envName}`)
}))