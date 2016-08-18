var mongoose = require('mongoose');

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
    set: function (entrada) {
      entrada = entrada.toString();
      entrada = entrada.replace(/[,.\s]+/g, "").trim();
      return parseInt(entrada);
    },
  },
  email: {
   type: String,
   unique: true,
   required: true,
   match: [ /^[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,}$/igm, 'Fill me with a valid E-Mail adress plizchu!' ]
 },
});

mongoose.model('Artista', ArtistaSchema);
