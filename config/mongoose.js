var config = require('./config');
var mongoose = require('mongoose');

module.exports = function () {
  mongoose.Promise = global.Promise;
  var db = mongoose.connect( config.db );

  require('../app/models/user.server.model');
  require('../app/models/artista.server.model');
  require('../app/models/obra.server.model');
  require('../app/models/voto.server.model');
  require('../app/models/persona.server.model');

  return db;
};
