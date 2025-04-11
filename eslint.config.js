import globals from 'globals';

import path from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';
import importPlugin from 'eslint-plugin-import';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended,
});

export default [
  {
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: { import: importPlugin },
    rules: {
      ...importPlugin.configs.recommended.rules,
    },
  },
  ...compat.extends('airbnb-base'),
  {
    rules: {
      'no-underscore-dangle': ['error', { allow: ['__filename', '__dirname'] }],
      'import/extensions': 'off',
      'no-console': 'off',
      'import/no-extraneous-dependencies': 'off',
    },
  },
];
