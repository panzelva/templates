const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = (env, argv) => [
  {
    entry: path.join(__dirname, 'src', 'main', 'electron.ts'),
    target: 'electron-main',
    module: {
      rules: [
        {
          test: /\.ts$/,
          include: /src/,
          use: [{ loader: 'ts-loader' }],
        },
      ],
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'electron.js',
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      plugins: [
        new TsconfigPathsPlugin({
          configFile: '../../tsconfig.json',
        }),
      ],
    },
  },
]
