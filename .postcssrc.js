const mqpacker = require('css-mqpacker')
const sortCSSmq = require('sort-css-media-queries')
const cssnano = require('cssnano')

module.exports = {
  modules: false,
  plugins: [
    mqpacker({
      sort: sortCSSmq
    }),
    cssnano()
  ]
}
