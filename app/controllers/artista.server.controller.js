var Artista = require('mongoose').model('Artista')
const helpers = require('../helpers');
const responser = helpers.responser;
const passer = helpers.passer;

exports.list = (req, res, next) => {
  Artista.find().lean().exec(responser(res))
}

exports.create = (req, res, next) => {
  var artista = new Artista(req.body)
  artista.save(responser(res))
}

exports.read = (req, res) => { res.json(req.artista) }

exports.update = (req, res, next) => {
  Artista.findByIdAndUpdate(req.artista._id, artista.body, responser(res))
}

exports.delete = (req, res, next) => { req.artista.remove(responser(res)) }

exports.artistaByID = (req, res, next, artista_id) => {
  Persona.findById(artista_id, passer(req, 'artista', next))
}

exports.artistaByDni = (req, res, next, artista_dni) => {
  Persona.findOne({ dni: artista_dni }, passer(req, 'artista', next))
}

exports.renderArtista = (req, res) => { res.render('artistas') }
