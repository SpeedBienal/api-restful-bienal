var Artista = require('mongoose').model('Artista');

exports.list = function (req, res, next) {
  Artista.find({}, function (err, artistas) {
    if (err) {
      return next(err);
    } else {
      res.json(artistas);
    }
  });
};

exports.create = function (req, res, next) {
  var artista = new Artista( req.body );
  artista.save(function (err) {
    if (err) {
      return next(err);
    } else {
      res.json(artista);
    }
  });
};

exports.read = function (req, res) {
  res.json( req.artista );
};

exports.update = function (req, res, next) {
  Artista.findByIdAndUpdate( req.artista._id, artista.body, function (err, artista) {
    if (err) {
      return next(err);
    } else {
      res.json( artista );
    }
  });
};

exports.delete = function (req, res, next) {
  req.artista.remove( function ( err, artista ) {
    if ( err ) {
      return next( err );
    } else {
      res.json( req.artista );
    }
  });
};

exports.artistaById = function (req, res, next, artista_id) {
  Persona.findOne({ _id: artista_id }, function (err, artista) {
    if (err) {
      return next(err);
    } else {
      req.artista = artista;
      next();
    }
  });
};

exports.artistaByDni = function (req, res, next, artista_dni) {
  Persona.findOne( { dni: artista_dni }, function (err, artista) {
    if (err) {
      return next(err);
    } else {
      req.artista = artista;
      next();
    }
  });
};
