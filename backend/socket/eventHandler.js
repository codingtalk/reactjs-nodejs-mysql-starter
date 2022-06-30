
let log4js = require('log4js')
let logger = log4js.getLogger()
var mysqlUtil = require('../utils/mysqlUtil')

module.exports = (io, socket) => {
  socket.on('disconnect', () => {
    console.log('a user disconnected')
  })

  socket.on('join', (room) => {
    socket.join(room)
    let r = io.of('/').adapter.rooms.get(room)
    let userSize = r.size
    logger.log(`the number if user in room is: ${userSize}`)
    if (userSize < 300) {
      socket.emit('joined', room, socket.id)
      if (userSize > 1) {
        socket.to(room).emit('joined', room, socket.id)
      }
    } else {
      socket.leave(room)
      socket.emit('full', room, socket.id)
    }
  })

  socket.on('leave', (room) => {
    let r = io.of('/').adapter.rooms.get(room)
    let userSize = r.size
    logger.log(`the number if user in room is: ${userSize - 1}`)
    socket.leave(room)
    socket.to(room).emit('leaved', room, socket.id)
    socket.emit('leaved', room, socket.id)
  })
}