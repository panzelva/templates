const path = require("path")
const nodeExternals = require("webpack-node-externals")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const { WebpackPkgPlugin } = require("webpack-pkg-plugin-v4")

// When using in another project, install dependencies with this command
// yarn add -D webpack webpack-cli webpack-node-externals ts-loader clean-webpack-plugin webpack-pkg-plugin-v4

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
  plugins: [
    new CleanWebpackPlugin({ verbose: true }),
    new WebpackPkgPlugin({
      targets: ["node12-linux-x64", "node12-macos-x64", "node12-win-x64"],
      output: "/",
    }),
  ],
  externals: [nodeExternals({ modulesFromFile: true })],
  optimization: {
    minimize: false,
  },
}
