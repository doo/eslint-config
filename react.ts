import sharedRules from './rules/sharedRules';
import reactRules from './rules/react';

module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript',
    'prettier',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['**/*.d.ts'],
  rules: {
    ...sharedRules,
    ...reactRules,
  }
};
