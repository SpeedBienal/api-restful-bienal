var voto = require('../controllers/voto.server.controller');
var obra = require('../controllers/obra.server.controller');


module.exports = function ( io, socket ) {

  //global.socket = socket;

  io.emit( 'voto', {
    type: 'status',
    text: 'connected',
    created: Date.now(),
  });
  console.log(voto.top());
  socket.on( 'voto', function ( data ) {
    data = voto.list_short;
    for (var cat in data) {
      if (data.hasOwnProperty(cat)) {
        for (var i = 0; i < data[cat].length; i++) {
          data[cat][i].obra = obra.read

        }
      }
    }
    io.emit( 'voto', data );
  });

  socket.on( 'disconnect', function () {
    io.emit( 'disconnect', {
      type: 'status',
      text: 'disconnect',
      created: Date.now()
    });
  });

};
