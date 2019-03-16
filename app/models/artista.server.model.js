var mongoose = require('mongoose');
const helpers = require('../helpers');

var ArtistaSchema = new mongoose.Schema({
  pseudonimo: {
    type: String
  },
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  dni: {
    type: Number,
    unique: true,
    required: true,
    set: helpers.parseDNI,
  },
  email: {
   type: String,
   unique: true,
   required: true
 }
});

mongoose.model('Artista', ArtistaSchema);
