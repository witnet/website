module.exports = {
  presets: [],

  webpack: function (config) {
    config.entry = {
      app: './src/ts/app.ts'
    }

    config.resolve = {
      extensions: ['.ts', '.vue', '.js', '.styl'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }

    config.module = {
      rules: [
        {test: /\.vue$/, loader: 'vue-loader', options: {loaders: {ts: 'vue-ts-loader'}, esModule: true}},
        {test: /\.ts$/, loader: 'ts-loader'},
        {test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader'}
      ]
    }

    return config
  },

  html: {
    title: "Witnet - Create smart contracts with real power",
    description: "Witnet connects smart contracts to any external data source available online."
  }

}