var mongoose = require('mongoose');
var restful = require('node-restful');

var Obra = restful.model( 'obra', new mongoose.Schema({
  nombre: {
    type: 'String',
    required: true,
  },
  campo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Campo',
  },
  catergoria: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categoria',
  },
  artistas: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artista',
  },
  votos: {
    type: 'Number',
    default: 0,
  },
  url: 'String',
}))
.methods([ 'get', 'post', 'put', 'delete' ]);

module.exports = Obra;
