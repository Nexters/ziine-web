const eslint = require('@eslint/js');
const prettier = require('eslint-plugin-prettier');
const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const storybook = require('eslint-plugin-storybook');

module.exports = [
  eslint.configs.recommended,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
    ignores: [
      'node_modules/**/*',
    ],
  },
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    plugins: {
      react: react,
      'react-hooks': reactHooks,
      prettier
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'prettier/prettier': ['error'],
    },
  },
  ...storybook.configs['flat/recommended']
];
