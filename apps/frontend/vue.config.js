const path = require('path')
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
    port: 9980 
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@workshopfest/core-libs', path.resolve(__dirname, '..', '..', 'packages/core-libs/src/lib'))
    config.optimization.delete('splitChunks')
    /* module federation plugin import */
    config
      .plugin('module-federation-plugin')
      .use(require('webpack').container.ModuleFederationPlugin, [{
        name: 'fe',
        remotes: {
          Quoter: 'Quoter@http://localhost:8002/mfe.js',
          Quotation: 'Quotation@http://localhost:8003/mfe.js'
        },
        shared: {
          vue: { singleton: true, requiredVersion: '3' }
        }
      }]
      )
  },
  configureWebpack: {
    experiments: {
      topLevelAwait: true
    },
    optimization: {
      splitChunks: false
    }
  }
})
