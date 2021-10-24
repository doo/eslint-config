module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript',
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
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 2,
    'react/jsx-indent-props': 0, // Prettier handles this
    'react/jsx-indent': 0, // Prettier handles this
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: [
          './e2e/**',
          '**/__mocks__/**',
          '**/*.{test,spec,stories}.{js,ts,tsx}',
        ],
      },
    ],
    'react/require-default-props': 0, // not needed with typescript
    'react/prop-types': 0, // not needed with typescript
    'react/react-in-jsx-scope': 0 // with react-jsx in tsconfig this is not needed anymore
  }
};
