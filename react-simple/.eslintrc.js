const path = require("path")

module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/@typescript-eslint"
  ],
  parserOptions: {
    // https://github.com/typescript-eslint/typescript-eslint/issues/251
    project: path.resolve(__dirname, "./tsconfig.json"),
    tsconfigRootDir: __dirname,
    warnOnUnsupportedTypeScriptVersion: false
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": 0
  },
  settings: {
    react: {
      version: "detect"
    }
  }
}
