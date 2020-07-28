// https://jestjs.io/docs/en/configuration#setupfiles-array
const { defaults: tsjPreset } = require('ts-jest/presets');
const { pathsToModuleNameMapper } = require('ts-jest/utils');

// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
const { compilerOptions } = require('./tsconfig');

module.exports = {
  roots: ['<rootDir>/src'],

  cache: true,

  verbose: true,

  resolver: 'browser-resolve',

  // Modules can be explicitly auto-mocked using jest.mock(moduleName).
  // https://facebook.github.io/jest/docs/en/configuration.html#automock-boolean
  automock: false, // [boolean]

  // This config option can be used here to have Jest stop running tests after the first failure.
  // https://facebook.github.io/jest/docs/en/configuration.html#bail-boolean
  bail: false, // [boolean]

  clearMocks: true,

  updateSnapshot: true,

  collectCoverage: true,

  globals: {
    __DEV__: false,
    NODE_ENV: 'test',
    'ts-jest': {
      tsConfig: './tsconfig.jest.json',
      babelConfig: false,
      diagnostics: false,
      enableInternalCache: true,
      disableSourceMapSupport: false,
      ignoreCoverageForDecorators: false,
      ignoreCoverageForAllDecorators: true,
      useExperimentalLanguageServer: false,
    },
  },

  transform: {
    ...tsjPreset.transform,
  },

  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',

  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths /*, { prefix: '<rootDir>/' } */),

  moduleDirectories: ['node_modules', 'src'],

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],

  // Setup Enzyme
  snapshotSerializers: ['enzyme-to-json/serializer', 'jest-styled-components'],

  setupFilesAfterEnv: ['<rootDir>/configs/jest/enzyme.setup.ts'],

  // Setup Coverage
  coverageDirectory: '<rootDir>/coverage',
  coveragePathIgnorePatterns: ['/node_modules/', '/configs/', '/typings/', '/public/', '/dist/'],
  collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}', '!**/node_modules/**'],

  testPathIgnorePatterns: ['/node_modules/', '/configs/', '/typings/', '/public/', '/dist/'],
};
