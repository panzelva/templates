const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = (env, argv) => {
  // const isDev = argv.mode !== "production";

  return {
    entry: "./src/main.tsx",
    output: {
      publicPath: "/",
      filename: "[name][hash].js"
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: "awesome-typescript-loader",
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./public/index.html"
      }),
      new CleanWebpackPlugin()
    ],
    optimization: {
      splitChunks: {
        chunks: "all"
        // minChunks: 2
      }
    },
    devServer: {
      contentBase: path.resolve(__dirname, "dist"),
      historyApiFallback: true,
      proxy: {
        "/graphql": "http://localhost:4000"
      }
    }
  }
}
