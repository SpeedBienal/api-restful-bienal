var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Voto = mongoose.model('Voto');

var PersonaSchema = new Schema({
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
    index: true,
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
 uuid: {
   type: String,
   required: true,
   unique: true
 },
  voto_musica: {
    type: Schema.ObjectId,
    ref: 'Obra',
    required: true,
  },
  voto_audiovisuales: {
    type: Schema.ObjectId,
    ref: 'Obra',
    required: true,
  },
  voto_visuales: {
    type: Schema.ObjectId,
    ref: 'Obra',
    required: true,
  },
  voto_escenicas: {
    type: Schema.ObjectId,
    ref: 'Obra',
    required: true,
  },
  voto_letras: {
    type: Schema.ObjectId,
    ref: 'Obra',
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  }
});

PersonaSchema.statics.personaByEmail = function (email, callback) {
  this.find( { email: new RegEx( email, 'i') }, callback );
};

PersonaSchema.statics.personaByUuid = function (persona_uuid, callback) {
  this.findOne( { uuid: new RegEx( persona_uuid, 'i') }, callback );
};

PersonaSchema.pre('save', function (next) {
  var array = [
    {obra: this.voto_audiovisuales, categoria: 'audiovisuales'},
    {obra: this.voto_visuales, categoria: 'visuales'},
    {obra: this.voto_musica, categoria: 'musica'},
    {obra: this.voto_escenicas, categoria: 'escenicas'},
    {obra: this.voto_letras, categoria: 'letras'}
  ];
  Voto.create( array, function (err, arr) {
    if (err) {
      return next(err);
    }
  });
  next();
});

mongoose.model('Persona', PersonaSchema);
