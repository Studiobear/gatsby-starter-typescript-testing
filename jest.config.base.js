module.exports = {
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': '<rootDir>/../../jest-preprocess.js',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.([tj]sx?)$',
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/../../__mocks__/file-mock.js',
    '^__mocks__/(.*)$': '../../__mocks__/$1',
    '.json$': 'identity-obj-proxy',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['node_modules', 'cypress', '.cache', 'public', 'dist', 'dist-esm'],
  transformIgnorePatterns: [
    'node_modules/(?!(gatsby|@ionic|ionicons)/)',
    '<rootDir>/../../node_modules/(?!(gatsby|@ionic|ionicons)/)',
    '<rootDir>/../../packages/*/src/*',
  ],
  globals: {
    __PATH_PREFIX__: '',
  },
  setupFiles: [`<rootDir>/../../config/jest/loadershim.js`],
  setupFilesAfterEnv: ['<rootDir>/../../config/jest/setup.ts'],
}
