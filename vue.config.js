const path = require('path')
// 拼接路径
function resolve (dir) {
  return path.join(__dirname, dir)
}
const port = 3000

module.exports = {
  publicPath: '/',
  productionSourceMap: false,
  devServer: {
    port,
    publicPath: '/',
    open: true,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_SERVICE_MODE === 'mock'
          ? `http://127.0.0.1:${port}/mock`
          : `https://api.tomokotv.com`,
        ws: true,
        changOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  },

  // css: {
  //   loaderOptions: {
  //     sass: {
  //       data: `
  //       `
  //     }
  //   }
  // },

  chainWebpack: config => {
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test

    // babel-polyfill 加入 entry
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@mock', resolve('src/mock/'))
      .set('@plugins', resolve('src/plugins/'))
      .set('@styles', resolve('src/assets/styles'))
      .set('@store', resolve('src/store/'))
      .set('@components', resolve('src/components/'))
      .set('@services', resolve('src/services'))
      .set('@assets', resolve('src/assets'))
      .set('@utils', resolve('src/utils'))

    config.when(process.env.VUE_APP_SERVICE_MODE === 'dev',
      config => config.devtool('cheap-source-map')
    )
    console.log('VUE_APP_SERVICE_MODE= ', process.env.VUE_APP_SERVICE_MODE)
  }
}
