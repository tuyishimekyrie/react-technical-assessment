// .eslintrc.js
module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:tailwindcss/recommended',
      'plugin:prettier/recommended'
    ],
    rules: {
      // Customize your rules here
      'react/react-in-jsx-scope': 'off', // If using React 17+
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  