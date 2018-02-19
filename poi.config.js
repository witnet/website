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
    title: "Witnet - Smart Contracts with Real Power",
    description: "The Witnet protocol gives smart contracts real power by connecting them to any online data source. Sport results, stock prices, weather forecasts or even other blockchains!"
  }

}