module.exports = (api) => {
  api.cache(true)

  return {
    extends: '@snowpack/app-scripts-react/babel.config.json',
    // HACK sourceMap must be false - https://github.com/emotion-js/emotion/issues/1936
    presets: [['@emotion/babel-preset-css-prop', { autoLabel: 'always', labelFormat: '[local]', sourceMap: false }]],
  }
}
