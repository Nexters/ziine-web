import eslint from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import storybook from 'eslint-plugin-storybook';
import tsEslint from 'typescript-eslint';

export default tsEslint.config(
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
    extends: [eslint.configs.recommended, react.configs.flat.recommended, tsEslint.configs.recommended, "prettier"],
  },
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },
  ...storybook.configs['flat/recommended'],
);
