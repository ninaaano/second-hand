const { CracoAliasPlugin } = require('react-app-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
  jest: {
    configure: {
      moduleNameMapper: {
        '^\\@Constants/(.*)$': '<rootDir>/src/constants/$1',
      },
    },
  },
};
