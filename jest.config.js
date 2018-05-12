module.exports = {
  verbose: true,
  moduleFileExtensions: ['js'],
  setupFiles: ['<rootDir>/config/setupTests.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  collectCoverageFrom: ['**/*.spec.{js}'],
  coveragePathIgnorePatterns: ['/node_modules/', '/coverage/'],
};
