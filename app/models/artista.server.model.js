var mongoose = require('mongoose');
var restful = require('node-restful');

var Artista = restful.model('artista', new mongoose.Schema({
  pseudonimo: {
    type: 'String'
  },
  persona_real: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true
  },
  contacto: {
    type: 'String',
    required: true,
  },
}))
.methods([ 'get', 'post', 'put', 'delete' ]);

module.exports = Artista;
