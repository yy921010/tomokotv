const path = require('path')
// 拼接路径
function resolve (dir) {
  return path.join(__dirname, dir)
}

function noop () {}

const port = 3000

module.exports = {
  publicPath: '/',
  productionSourceMap: false,
  devServer: {
    port,
    publicPath: '/',
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    before: process.env.VUE_APP_SERVICE_MODE === 'mock' ? require('./mock/mock-server.js') : noop,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_SERVICE_MODE === 'mock'
          ? `http://127.0.0.1:${port}/mock`
          : `https://api.tomokotv.com/v1`,
        ws: true,
        changOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  },

  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/styles/_custom.scss";
        `
      }
    }
  },

  chainWebpack: config => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')

    // babel-polyfill 加入 entry
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@mock', resolve('src/mock/'))
      .set('@plugins', resolve('src/plugins/'))
      .set('@styles', resolve('src/assets/styles'))
      .set('@store', resolve('src/store/'))
      .set('@components', resolve('src/components/'))
      .set('@api', resolve('src/api'))
      .set('@assets', resolve('src/assets'))
      .set('@utils', resolve('src/utils'))

    config.when(process.env.VUE_APP_SERVICE_MODE === 'dev',
      config => config.devtool('cheap-source-map')
    )
    console.log('[vue.config.js] [chainWebpack] VUE_APP_SERVICE_MODE =', process.env.VUE_APP_SERVICE_MODE)
  }
}
