var mysqlUtil = require('../utils/mysqlUtil')

module.exports = (io, socket, callback) => {
  var { query } = socket.handshake
  var { appid, secret } = query
  if (!appid || !secret) {
    socket.disconnect(true)
  }
  mysqlUtil.query(`SELECT * FROM sys_ws_app WHERE appid = '${appid}' AND secret = '${secret}' AND is_delete = 0`).then(rows => {
    if (!rows.length) {
      socket.disconnect(true)
      socket.emit(`login-status`, { status: false, message: 'appid verify fail' })
    }
    socket.emit(`login-status`, { status: true, message: 'appid verify success' })
    callback && callback()
  })
}