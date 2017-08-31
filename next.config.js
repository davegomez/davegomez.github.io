const config = require('nextein/config').default

module.exports = config({
  exportPathMap: () => ({
    '/about': { page: 'about' }
  })
})
