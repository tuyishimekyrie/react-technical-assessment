// .eslintrc.js
module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:tailwindcss/recommended',
      'plugin:prettier/recommended'
    ],
    parserOptions: {
      ecmaVersion: 2021, 
      sourceType: 'module',
    },
    rules: {
      'constructor-super': 'error', 
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  