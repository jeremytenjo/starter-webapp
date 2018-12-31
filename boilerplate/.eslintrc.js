module.exports = {
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: '16.0'
    },
    propWrapperFunctions: ['forbidExtraProps']
  },
  rules: {
    'no-const-assign': 'warn',
    'no-this-before-super': 'warn',
    'no-undef': 'warn',
    'no-unreachable': 'warn',
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'constructor-super': 'warn',
    'valid-typeof': 'warn',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react/jsx-uses-react:': 'off',
    'react/jsx-fragments': [true, 'syntax']
  }
}
