const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")
const webpack = require("webpack")

module.exports = () => {
  return {
    entry: "./src/main.tsx",
    output: {
      publicPath: "/",
      filename: "[name][hash].js",
      path: path.resolve(process.cwd(), "dist"),
    },
    module: {
      rules: [
        {
          test: /\.(jsx|tsx|js|ts)$/,
          loader: "babel-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new ForkTsCheckerWebpackPlugin(),
      new HtmlWebPackPlugin({ template: "./public/index.html" }),
      new CleanWebpackPlugin(),
    ],
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
    devServer: {
      historyApiFallback: true,
    },
  }
}
