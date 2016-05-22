var mongoose = require('mongoose');
var restful = require('node-restful');

var Persona = restful.model( 'persona', new mongoose.Schema({
  nombre: {
    type: 'String',
    required: true,
  },
  apellido: {
    type: 'String',
    required: true,
  },
  fecha_nacimiento: {
    type: 'Date',
    default: Date.now,
  },
  email: {
    type: 'String',
    required: true,
    trim: true
  }
}))
.methods( [ 'get', 'post', 'put', 'delete' ] );

exports = module.exports = Persona;
