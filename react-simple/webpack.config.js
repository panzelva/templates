const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { createEmotionPlugin } = require("emotion-ts-plugin")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")

module.exports = (env, argv) => {
  // const isDev = argv.mode !== "production";

  return {
    entry: "./src/main.tsx",
    output: {
      publicPath: "/",
      filename: "[name][hash].js",
    },
    module: {
      rules: [
        {
          test: /\.(jsx|tsx|js|ts)$/,
          loader: "ts-loader",
          options: {
            transpileOnly: true,
            getCustomTransformers: () => ({
              before: [
                createEmotionPlugin({
                  sourcemap: true,
                  autoLabel: true,
                  labelFormat: "[local]",
                  autoInject: true,
                }),
              ],
            }),
            compilerOptions: {
              jsxFactory: "jsx",
            },
          },
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        eslint: {
          files: "./src/**/*.{ts,tsx,js,jsx}", // required - same as command `eslint ./src/**/*.{ts,tsx,js,jsx} --ext .ts,.tsx,.js,.jsx`
        },
      }),
      new HtmlWebPackPlugin({
        template: "./public/index.html",
      }),
      new CleanWebpackPlugin(),
    ],
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
    devServer: {
      contentBase: path.resolve(__dirname, "dist"),
      historyApiFallback: true,
    },
  }
}
