const webpack = require('webpack')
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: 'auto',
  pages: {
    index: {
      entry: './src/main.js'
    }
  },
  devServer: { 
    port: 9981
  },
  // chainWebpack: (config) => {
  //   config.optimization.delete('splitChunks')
  //   /* module federation plugin import */
  //   config
  //     .plugin('module-federation-plugin')
  //     .use(require('webpack').container.ModuleFederationPlugin, [{
  //       name: 'xxx',
  //       shared: {
  //         vue: { singleton: true, requiredVersion: '3' }
  //       }
  //     }]
  //     )
  // },
  configureWebpack: {
    experiments: {
      topLevelAwait: true
    },
    optimization: {
      splitChunks: false
    }
  }
})
