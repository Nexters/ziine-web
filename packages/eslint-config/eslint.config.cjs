const eslint = require('@eslint/js');
const prettier = require('eslint-plugin-prettier');
const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const storybook = require('eslint-plugin-storybook');
const tseslint = require('typescript-eslint');

module.exports = [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: "../tsconfig.json",
      },
    },
    ignores: [
      'node_modules/**/*',
      '**/*.mjs',
      '**/*.cjs'
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
      'react/react-in-jsx-scope': 'off',
    },
  },
  ...storybook.configs['flat/recommended']
];
