const path = require('path')
module.exports = {
  configureWebpack: {
    plugins: [require('unplugin-auto-import/webpack')({})]
  },

  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('views', '@/views')
  }
}
