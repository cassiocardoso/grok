module.exports = {
  rootDir: './',
  bail: true,
  coverageReporters: [
    "json-summary",
    "lcov",
    "text",
  ],
  collectCoverageFrom: [
    'algorithms/**/*.js',
  ],
  coverageDirectory: '<rootDir>/coverage',
  coverageThreshold: {
    global: {
      statements: 93,
      branches: 87,
      functions: 92,
      lines: 92,
    },
  },
  moduleDirectories: [
    'node_modules',
  ],
  testRegex: 'tests/.*\\.(test|spec)\\.js$',
  verbose: true,
};