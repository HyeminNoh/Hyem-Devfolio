// vue.config.js
module.exports = {
    publicPath: '/Hyem-Devfolio/',
    chainWebpack: config => {
        config.module
          .rule('images')
            .use('url-loader')
              .loader('url-loader')
              .tap(options => Object.assign(options, { limit: 10240 }))
      }
    }