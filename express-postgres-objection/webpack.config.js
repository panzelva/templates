const path = require('path')
const nodeExternals = require('webpack-node-externals')
const NodemonPlugin = require('nodemon-webpack-plugin')
const glob = require('glob')

const commonConfig = {
  mode: 'development',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  externals: [nodeExternals({ modulesFromFile: true })],
  optimization: {
    minimize: false,
  },
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
  },
}

const serverConfig = {
  ...commonConfig,
  entry: path.resolve(__dirname, 'src', 'start.ts'),
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new NodemonPlugin()],
  devtool: 'eval-source-map',
}

const createFileEntries = (globString) => {
  const migrations = glob.sync(globString)
  return migrations.reduce((acc, cur) => {
    const { name } = path.parse(cur)
    return { ...acc, [name]: cur }
  }, {})
}

const migrationsConfig = {
  ...commonConfig,
  entry: createFileEntries('./src/database/migrations/*.ts'),
  output: {
    path: path.resolve(__dirname, 'dist', 'migrations'),
    filename: '[name].js',
    // this setting will ensure that our migrations are usable by knex
    libraryTarget: 'commonjs-module',
  },
}

const seedsConfig = {
  ...commonConfig,
  entry: createFileEntries('./src/database/seeds/*.ts'),
  output: {
    path: path.resolve(__dirname, 'dist', 'seeds'),
    filename: '[name].js',
    // this setting will ensure that our migrations are usable by knex
    libraryTarget: 'commonjs-module',
  },
}

module.exports = [serverConfig, migrationsConfig, seedsConfig]
