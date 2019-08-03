// https://jestjs.io/docs/en/configuration#setupfiles-array

module.exports = {
  cache: true,
  verbose: false,
  // Modules can be explicitly auto-mocked using jest.mock(moduleName).
  // https://facebook.github.io/jest/docs/en/configuration.html#automock-boolean
  automock: false, // [boolean]

  // Respect Browserify's 'browser' field in package.json when resolving modules.
  // https://facebook.github.io/jest/docs/en/configuration.html#browser-boolean
  browser: false, // [boolean]

  // This config option can be used here to have Jest stop running tests after the first failure.
  // https://facebook.github.io/jest/docs/en/configuration.html#bail-boolean
  bail: false, // [boolean]

  clearMocks: false,

  updateSnapshot: true,

  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
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
  testMatch: ['<rootDir>/src/**/__tests__/**/*.(ts|tsx|js)', '<rootDir>/src/**/?(*.)(spec|test).(ts|tsx|js)'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],

  moduleNameMapper: {
    '^app/(.*)': '<rootDir>/src/app/$1',
    '^utils/(.*)': '<rootDir>/src/utils/$1',
    '^pages/(.*)': '<rootDir>/src/pages/$1',
    '^assets/(.*)': '<rootDir>/src/assets/$1',
    '^layouts/(.*)': '<rootDir>/src/layouts/$1',
    '^settings/(.*)': '<rootDir>/src/settings/$1',
    '^services/(.*)': '<rootDir>/src/services/$1',
    '^fragments/(.*)': '<rootDir>/src/fragments/$1',
    '^components/(.*)': '<rootDir>/src/components/$1',
  },

  // Setup Enzyme
  snapshotSerializers: ['enzyme-to-json/serializer', 'jest-emotion'],
  setupFilesAfterEnv: ['<rootDir>/configs/jest/enzyme.setup.ts'],

  // Setup Coverage
  coverageDirectory: '<rootDir>/coverage',
  coveragePathIgnorePatterns: ['/node_modules/', '/configs/', '/typings/', '/public/', '/dist/'],
  collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}', '!**/node_modules/**'],
};
