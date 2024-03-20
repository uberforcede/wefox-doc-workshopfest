const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: 'auto',
  pages: {
    index: {
      entry: './src/main.js'
    }
  },
  devServer: { 
    port: 8002 
  },
  chainWebpack: (config) => {
    config.optimization.delete('splitChunks')
    /* module federation plugin import */
    config
      .plugin('module-federation-plugin')
      .use(require('webpack').container.ModuleFederationPlugin, [
        {
          name: 'Quoter',
          filename: 'mfe.js',
          exposes: {
            './QuoterMfe': './src/components/QuoterMfe.vue'
          },
          shared: {
            vue: { singleton: true, requiredVersion: '3' }
          }
        }
      ]
      )
    config.resolve.alias
      .set('@workshopfest/core-libs', path.resolve(__dirname, '..', '..', 'packages/core-libs/src/lib'))  
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
