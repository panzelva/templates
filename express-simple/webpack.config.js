const path = require("path")
const nodeExternals = require("webpack-node-externals")
const NodemonPlugin = require("nodemon-webpack-plugin")

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "server.ts"),
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist")
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  externals: [
    nodeExternals({
      modulesFromFile: true,
      whitelist: [/^@fyis/]
    })
  ],
  optimization: {
    minimize: false
  },
  devtool: "eval-source-map",
  plugins: [new NodemonPlugin({ nodeArgs: ["--inspect"] })]
}
