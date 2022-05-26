module.exports = (api) => {
  api.cache(true)

  return {
    presets: [
      ["@babel/env", { targets: "> 0.25%", useBuiltIns: "usage", corejs: "3" }],
      "@babel/preset-react",
      ["@babel/preset-typescript", { allExtensions: true, isTSX: true }],
      ["@emotion/babel-preset-css-prop", { autoLabel: "always", labelFormat: "[local]" }],
    ],
    plugins: [],
  }
}
