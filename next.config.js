const withStylus = require('@zeit/next-stylus')

module.exports = {
  withStylus: withStylus({}),
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/introduce': { page: '/introduce' },
    }
  }
}

module.exports = withStylus({
  /* config options here */
})
