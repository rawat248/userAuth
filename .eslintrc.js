module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: [
    "react",

  ],
  rules: {
    "linebreak-style": 0,
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-unused-vars": ["error", { vars: "all", args: "after-used", ignoreRestSiblings: false }],
    "no-tabs": 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "no-alert": "off",
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "no-shadow": "off",

  },
};
