module.exports = {
  extends: ['plugin:vue/base'],
  rules: {
    'vue/script-setup-uses-vars': 'error'
  },
  env: {
    node: true,
    // The Follow config only works with eslint-plugin-vue v8.0.0+
    'vue/setup-compiler-macros': true
  },
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    parser: '@typescript-eslint/parser' // Specifies the ESLint parser
  }
}
