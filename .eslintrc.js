module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    'airbnb',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
    "no-param-reassign": [1, { "props": true, "ignorePropertyModificationsFor": ["state"] }],
    "import/extensions": 0,
    "import/prefer-default-export": 0,
    "import/no-unresolved": 0,
    "react/jsx-filename-extension": [1, { "extensions": [ ".tsx"] }],
    "@typescript-eslint/restrict-template-expressions": 0
  },
}
