const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');

module.exports = () => [
  {
    test: /\.toml$/i,
    type: 'json',
    parser: {
      parse: toml.parse,
    },
  },
  {
    test: /\.yaml$/i,
    type: 'json',
    parser: {
      parse: yaml.parse,
    },
  },
  {
    test: /\.json5$/i,
    type: 'json',
    parser: {
      parse: json5.parse,
    },
  },
];
