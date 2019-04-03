const { DuplicatesPlugin } = require('inspectpack/plugin');

const options = require('../../options');

module.exports = () => {
  return [
    new DuplicatesPlugin({
      // Emit compilation warning or error? (Default: `false`)
      emitErrors: false,
      // Handle all messages with handler function (`(report: string)`)
      // Overrides `emitErrors` output.
      emitHandler: undefined,
      // Display full duplicates information? (Default: `false`)
      verbose: false,
    }),
  ]
}
