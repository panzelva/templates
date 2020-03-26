const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = (env, argv) => {
  return {
    entry: path.join(__dirname, "src", "renderer", "main.tsx"),
    target: "electron-renderer",
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          include: /src/,
          use: [{ loader: "ts-loader" }]
        }
      ]
    },
    output: {
      path: path.join(__dirname, "dist"),
      filename: "react.js"
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "index.html")
      })
    ]
  };
};
