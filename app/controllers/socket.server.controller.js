var voto = require('../controllers/voto.server.controller');
var obra = require('../controllers/obra.server.controller');


module.exports = function ( io, socket ) {

  io.emit( 'voto', {
    type: 'status',
    text: 'connected',
    created: Date.now(),
  });

  socket.on( 'disconnect', function () {
    io.emit( 'disconnect', {
      type: 'status',
      text: 'disconnect',
      created: Date.now()
    });
  });

};
