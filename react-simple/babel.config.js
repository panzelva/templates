module.exports = (api) => {
  api.cache(true)

  return {
    presets: [
      ["@babel/env", { targets: "> 0.25%", useBuiltIns: "usage", corejs: "3" }],
      "@babel/preset-react",
      ["@babel/preset-typescript", { allExtensions: true, isTSX: true }],
      ["@emotion/babel-preset-css-prop", { autoLabel: true, labelFormat: "[local]" }],
    ],
    plugins: [
      "@babel/plugin-syntax-dynamic-import",
      "@babel/proposal-class-properties",
      "@babel/proposal-object-rest-spread",
    ],
  }
}
