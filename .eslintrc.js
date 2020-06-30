module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:jest/recommended'
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  rules: {
  },
  plugins: ['jest']
}
