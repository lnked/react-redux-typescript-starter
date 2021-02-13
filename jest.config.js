const { transform } = require('ts-jest/presets');
const { pathsToModuleNameMapper } = require('ts-jest/utils');

const { compilerOptions } = require('./tsconfig.paths');

module.exports = {
  roots: ['<rootDir>/src'],
  transform,
  globals: {
    __DEV__: false,
    NODE_ENV: 'test',
    'ts-jest': {
      tsConfig: './tsconfig.jest.json',
      babelConfig: true,
      diagnostics: false,
      enableInternalCache: true,
      disableSourceMapSupport: false,
      ignoreCoverageForDecorators: false,
      ignoreCoverageForAllDecorators: true,
      useExperimentalLanguageServer: false,
    },
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  setupFilesAfterEnv: ['<rootDir>/configs/jest/enzyme.setup.ts'],
  snapshotSerializers: ['enzyme-to-json/serializer', 'jest-styled-components'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths /*, { prefix: '<rootDir>/' } */),
  moduleDirectories: ['<rootDir>/src', 'node_modules'],
};
