module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  setupFiles: ['react-app-polyfill/jsdom'],
  setupFilesAfterEnv: ['<rootDir>/configs/jest/enzyme.setup.ts'],
  testMatch: ['<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}', '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'],
  testEnvironment: 'jsdom',
  testRunner: '<rootDir>/node_modules/jest-circus/runner.js',
  transform: {
    '^.+\\.(js|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    // '^.+\\.s?(a|c)ss$': '<rootDir>/jest/cssTransform.js',
    // '^(?!.*\\.(js|ts|tsx|css|json)$)': '<rootDir>/jest/fileTransform.js',
  },
  snapshotSerializers: ['enzyme-to-json/serializer', 'jest-styled-components'],
  transformIgnorePatterns: ['node_modules/(?!(@vtb|@openvtb)/.*)'],
  modulePaths: [],
  moduleNameMapper: {
    '^@app(.*)': '<rootDir>/src/app$1',
    '^@i18n(.*)': '<rootDir>/src/i18n$1',
    '^@utils(.*)': '<rootDir>/src/utils$1',
    '^@hooks(.*)': '<rootDir>/src/hooks$1',
    '^@store(.*)': '<rootDir>/src/store$1',
    '^@stores(.*)': '<rootDir>/src/stores$1',
    '^@pages(.*)': '<rootDir>/src/pages$1',
    '^@themes(.*)': '<rootDir>/src/themes$1',
    '^@assets(.*)': '<rootDir>/src/assets$1',
    '^@typings(.*)': '<rootDir>/src/typings$1',
    '^@modules(.*)': '<rootDir>/src/modules$1',
    '^@layouts(.*)': '<rootDir>/src/layouts$1',
    '^@services(.*)': '<rootDir>/src/services$1',
    '^@settings(.*)': '<rootDir>/src/settings$1',
    '^@fragments(.*)': '<rootDir>/src/fragments$1',
    '^@components(.*)': '<rootDir>/src/components$1',
    '^@decorators(.*)': '<rootDir>/src/decorators$1',
    '^@svgstore(.*)': '<rootDir>/src/assets/svgstore$1',
    '^@images(.*)': '<rootDir>/src/assets/images$1',
    '^@stylesheets(.*)': '<rootDir>/src/assets/stylesheets$1',

    '\\.(s?(a|c)ss)$': '<rootDir>/src/__mocks__/styleMock.js',
  },
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'node'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  resetMocks: false,
};
