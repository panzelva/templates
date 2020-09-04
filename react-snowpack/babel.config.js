module.exports = (api) => {
  api.cache(true)

  return {
    presets: [
      '@babel/preset-react',
      '@babel/preset-typescript',
      ['@emotion/babel-preset-css-prop', { autoLabel: true, labelFormat: '[local]' }],
    ],
    plugins: ['@babel/plugin-syntax-import-meta'],
    env: {
      development: {
        plugins: ['react-refresh/babel'],
      },
    },
  }
}
