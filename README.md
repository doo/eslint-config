# Shared Eslint Configuration for all Typescript projects

Add it your repository:
```
npm install github:doo/eslint-config --save-dev
```

Add required dev dependencies your repository:

```
npm install prettier eslint-plugin-prettier eslint-plugin-import eslint @typescript-eslint/parser eslint-config-prettier eslint-config-airbnb-typescript @typescript-eslint/eslint-plugin @typescript-eslint/experimental-utils --save-dev
```

Example how to use this package in your typescript project (.eslintrc.js):
```
module.exports = {
  extends: [
    '@doo/eslint-config'
  ]
};
```

## React Apps

Example how to use this package in your React apps (.eslintrc.js):
```
module.exports = {
  extends: [
    '@doo/eslint-config/react'
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
};
```
