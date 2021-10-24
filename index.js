module.exports = {
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['**/*.d.ts'],
  rules: {
    '@typescript-eslint/indent': 0, // Prettier handles this
    'max-len': [
      2,
      {
        code: 100,
        tabWidth: 2,
        ignoreStrings: true,
        ignoreComments: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-tabs': 2,
    'no-console': 0,
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: ['**/__mocks__/**', '**/*.{test,spec}.{js,ts,tsx}'],
      },
    ],
  },
  parserOptions: {
    project: './tsconfig.json',
  },
};
