var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObraSchema = new Schema({
  titulo: {
    type: String,
    required: true,
  },
  autor: {
    type: Schema.ObjectId,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
    enum: ['audiovisuales','visuales','musica','escenicas','letras'],
  },
  clase: {
    type: String,
    required: true,
    enum: ['A','B'],
  },
  tecnica: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now
  }
});

ObraSchema.statics.findByAutor = function (autor, callback) {
  this.find( { autor: new RegEx( autor, 'i') }, callback );
};

ObraSchema.statics.findByFiltro = function (filtro, callback) {
  this.$where(function () {
    return
      this.titulo.toLowerCase().includes(filtro.toLowerCase()) ||
      this.autor.toLowerCase().includes(filtro.toLowerCase());
  }, callback)
}

ObraSchema.statics.findByCategoria = function (categoria, callback) {
  this.find({ categoria: new RegExp(`^${categoria}$`, 'i') }, callback)
}

ObraSchema.set( 'toJSON', { getters: true })

mongoose.model('Obra', ObraSchema)
