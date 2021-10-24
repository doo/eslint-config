# Shared Eslint Configuration for all Typescript projects

Add it your repository:
```
npm install github:doo/eslint-config --save-dev
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
  ]
};
```
