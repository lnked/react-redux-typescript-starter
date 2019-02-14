const path = require('path')
const dotenv = require('dotenv')
const variableExpansion = require('dotenv-expand')

const envName = '.example'

variableExpansion(
  dotenv.config({
    path: path.resolve(process.cwd(), `.env${envName}`)
  })
)