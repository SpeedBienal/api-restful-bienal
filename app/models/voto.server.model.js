var mongoose = require('mongoose');
var restful = require('node-restful');

var Voto = restful.model('voto', new mongoose.Schema({
  votante: {
    type: 'ObjectId',
    ref: 'persona',
    required: true,
  },
  obra: {
    type: 'ObjectId',
    ref: 'obra',
    required: true,
  },

})).methods([ 'get', 'post' ]);

module.exports = Voto;
