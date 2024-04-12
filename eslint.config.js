const js = require('@eslint/js')
const globals = require('globals')

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 6,
      parserOptions: {
        ecmaVersion: 6
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  }
]
