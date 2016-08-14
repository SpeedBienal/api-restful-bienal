var Persona = require('mongoose').model('Persona');

exports.list = function (req, res, next) {
  Persona.find({}, function (err, personas) {
    if (err) {
      return next(err);
    } else {
      res.json(personas);
    }
  });
};

exports.create = function (req, res, next) {
  var persona = new Persona( req.body );
  persona.save(function (err) {
    if (err) {
      return next(err);
    } else {
      //socket emit
      res.json(persona);
    }
  });
};

exports.read = function (req, res) {
  res.json( req.persona );
};

exports.update = function (req, res, next) {
  Persona.findByIdAndUpdate( req.persona._id, persona.body, function (err, persona) {
    if (err) {
      return next(err);
    } else {
      res.json( persona );
    }
  });
};

exports.delete = function (req, res, next) {
  req.persona.remove( function ( err, persona ) {
    if ( err ) {
      return next( err );
    } else {
      res.json( req.persona );
    }
  });
};

exports.personaById = function (req, res, next, id) {
  Persona.findOne({ _id: id }, function (err, persona) {
    if (err) {
      return next(err);
    } else {
      req.persona = persona;
      next();
    }
  });
};

exports.personaByDNI = function (req, res, next, dni) {
  Persona.findOne( {dni: dni}, function (err, persona) {
    if (err) {
      return next(err);
    } else {
      req.persona = persona;
      next();
    }
  });
};

exports.puedeVotar = function (req, res, next) {
  Persona.find({ email: req.body.email }, function (err, persona_mail) {
    if (err) {
      return next(err);
    } else {
      Persona.find({ dni: req.body.dni }, function (err, persona_dni) {
        if (err) {
          return next(err);
        } else {
          if (persona_dni.length === 0 && persona_mail.length === 0) {
            res.json({ puede_votar: true });
          } else {
            res.json({ puede_votar: false });
          }
        }
      });
    }
  });
};
