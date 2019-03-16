const Obra = require('mongoose').model('Obra')
const helpers = require('../helpers');
const responser = helpers.responser;
const passer = helpers.passer;

exports.list = (req, res) => {
  Obra.find().sort('-created').lean().exec(responser(res))
}

exports.create = (req, res) => {
  const obra = new Obra(req.body)
  obra.save(responser(res))
}

exports.read = (req, res) => { res.json(req.obra) }

exports.update = (req, res) => {
  Obra.findByIdAndUpdate(req.obra._id, req.body, responser(res))
}

exports.delete = (req, res) => { req.obra.remove(responser(res)) }

exports.obraByID = (req, res, next, id) => {
  Obra.findById(id, passer(req, 'obra', next))
}

exports.obraByAutor = (req, res, next, autor) => {
 Obra.findByAutor(autor, passer(req, 'obra', next))
}

exports.obraByCategoria = (req, res, next, categoria) => {
  Obra.findByCategoria(categoria, passer(req, 'obra', next))
}

exports.obraByFiltro = (req, res, next, filtro) => {
  Obra.findByFiltro(filtro, passer(req, 'obra', next))
}

exports.pretty_list = (req, res) => {
  Obra.find().select('-_id titulo autor categoria').lean().exec(responser(res))
}

exports.renderObra = (req, res) => { res.render('obras') }
