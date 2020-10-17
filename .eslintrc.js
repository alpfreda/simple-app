module.exports = {
  "env": {
    "es6": true,
    "node": true,
  },
  "globals": {
    "initialState": false,
    "window": false,
    "document": false,
  },
  "ecmaFeatures": {
    "modules": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 2016,
    "sourceType": "module",
    'ecmaFeatures': {
      "experimentalObjectRestSpread": true,
      'jsx': true
    }
  },
  plugins: [
    'react',
  ],
  "rules": {
    "no-unused-vars": "WARN",
    "indent": ["warn", 2, { SwitchCase: 1 }],
    "linebreak-style": 0,
    "quotes": [
      "warn",
      "single",
      { "allowTemplateLiterals": true },
    ],

    "semi": [
      "warn",
      "never"
    ],
    "no-console": 0
  }
}