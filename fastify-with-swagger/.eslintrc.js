const path = require("path")

// When using in another project, install dependencies with this command
// yarn add -D typescript eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-prettier prettier

module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["plugin:@typescript-eslint/recommended", "prettier", "prettier/@typescript-eslint"],
  parserOptions: {
    // https://github.com/typescript-eslint/typescript-eslint/issues/251
    project: path.resolve(__dirname, "./tsconfig.json"),
    tsconfigRootDir: __dirname,
    warnOnUnsupportedTypeScriptVersion: false,
  },
  rules: {
    "@typescript-eslint/no-empty-function": "warn",
    "@typescript-eslint/explicit-function-return-type": ["off"],
    "@typescript-eslint/no-empty-interface": ["warn"],
    "@typescript-eslint/ban-ts-comment": ["warn"],
    "no-console": ["warn"],
  },
}
