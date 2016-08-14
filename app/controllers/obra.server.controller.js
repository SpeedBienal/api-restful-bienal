var Obra = require('mongoose').model('Obra');

var getErrorMessage = function ( err ) {
  if ( err.errors ) {
    for ( var errName in err.errors ) {
      if ( err.errors[ errName ].message )
        return err.errors[ errName ].message;
    }
  } else {
    return 'Unknown server error, pal'
  }
};

exports.list = function (req, res) {
  Obra.find()
  .sort('-created')
  .exec(function (err, obras) {
    if (err) {
      return res.status(400).send( { message: getErrorMessage( err ) } );
    } else {
      res.json(obras);
    }
  });
};

exports.create = function (req, res) {
var obra = new Obra(req.body);

obra.save(function (err) {
  if (err) {
    return res.status(400).send( { message: getErrorMessage( err ) } );
  } else {
    res.json(obra);
  }
});
};

exports.read = function (req, res) {
  res.json( req.obra );
};

exports.update = function (req, res) {
  var obra = req.obra;
  obra.titulo = req.body.titulo;
  obra.autor = req.body.autor;
  obra.categoria = req.body.categoria;
  obra.save(function (err) {
    if (err) {
      return res.status(400).send( { message: getErrorMessage( err ) } );
    } else {
      res.json(obra);
    }
  });
};

exports.delete = function (req, res) {
  var obra = req.obra;
  obra.remove(function (err) {
    if (err) {
      return res.status(400).send( { message: getErrorMessage( err ) } );
    } else {
      res.json(obra);
    }
  });
};

exports.obraByID = function (req, res, next, id) {
  Obra.findOne( {_id: id}, function (err, obra) {
    if ( err ) {
      return next( err );
    } else {
      req.obra = obra;
      next();
    }
  });
};


exports.obraByAutor = function (req, res, next, autor) {
 Obra.findByAutor( autor, function (err, obras) {
   if (err) {
     return next(err);
   } else if ( obras.length === 0 || !obras ) {
     return next( new Error("No se encontraron obras de " + autor));
   } else {
     req.obra = obras;
     next();
 }});
};

exports.obraByCategoria = function (req, res, next, categoria) {
  Obra.findByCategoria( categoria, function (err, obras) {
    if (err) {
      return next(err);
  /*  } else if ( obras.length === 0 || !obras ) {
      return next( new Error("No se encontraron obras de la categoría " + categoria));
  */  } else {
      req.obra = obras;
      next();
    }});
};

exports.obraByFiltro = function (req, res, next, filtro) {
  Obra.findByFiltro( filtro, function (err, obras) {
    if (err) {
      return next(err);
    } else if ( obras.length === 0 || !obras ) {
      return next( new Error("No se econtraron coincidencias con '"+ filtro +"'"));
    } else {
      req.obra = obras;
      next();
  }});
};

exports.pretty_list = function (req, res) {
  Obra.find({}, '-_id titulo autor categoria', function(err, obras) {
    if (err) {
      return res.status(400).send( { message: getErrorMessage( err ) } );
    } else {
      res.json(obras);
    }
  });
};
