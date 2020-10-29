const users = require('../api/modules/users/network')

module.exports = (app) => {
  app.use('', users)
  // app.use('', )
  // app.use('', )
  // app.use('', )
}