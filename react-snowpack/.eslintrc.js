const path = require('path')

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks', '@emotion'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:react/recommended',
    'prettier/react',
  ],
  rules: {
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    '@typescript-eslint/no-empty-interface': ['warn'],
    '@typescript-eslint/ban-ts-comment': ['warn'],
    '@typescript-eslint/ban-types': 'warn',
    'no-console': ['warn'],
    'react/prop-types': ['off'],
    'react/self-closing-comp': ['warn'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // Emotion rules
    '@emotion/pkg-renaming': 'error',
    '@emotion/syntax-preference': [2, 'string'],
    '@emotion/no-vanilla': 'error',
    '@emotion/import-from-emotion': 'error',
    '@emotion/styled-import': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    // https://github.com/typescript-eslint/typescript-eslint/issues/251
    project: path.resolve(__dirname, './tsconfig.json'),
    tsconfigRootDir: __dirname,
    warnOnUnsupportedTypeScriptVersion: false,
  },
}
