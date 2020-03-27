const path = require("path")
const nodeExternals = require("webpack-node-externals")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

// When using in another project, install dependencies with this command
// yarn add -D webpack webpack-cli webpack-node-externals ts-loader clean-webpack-plugin

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "cmd.ts"),
  output: {
    filename: "cmd.js",
    path: path.resolve(__dirname, "dist"),
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [new CleanWebpackPlugin({ verbose: true })],
  externals: [nodeExternals({ modulesFromFile: true })],
  optimization: {
    minimize: false,
  },
  devtool: "eval-source-map",
}
