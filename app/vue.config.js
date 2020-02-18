module.exports = {
  configureWebpack: {
    externals: {
      'vue': 'window.Vue',
      'vue-router': 'window.VueRouter',
    },
  }
}
