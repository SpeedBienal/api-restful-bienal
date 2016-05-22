var mongoose = require('mongoose');
var restful = require('node-restful');


var Categoria = restful.model('categoria', new mongoose.Schema({
    nombre: {
      type: 'String',
      required: true
    },
    regla: 'String',
  }))
.methods([ 'get', 'post', 'put', 'delete' ]);

module.exports = Categoria;
