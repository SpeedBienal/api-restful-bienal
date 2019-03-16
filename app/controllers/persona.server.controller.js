var Persona = require('mongoose').model('Persona');
const helpers = require('../helpers');
const responser = helpers.responser;
const passer = helpers.passer;


exports.list = (req, res, next) => {
  Persona.find().lean().exec(responser(res))
};

exports.create = (req, res, next) => {
  var persona = new Persona(req.body);
  persona.save((err) => {
    if (err) return next(err);
    else {
      global.io.emit('voto', {
        type: 'status',
        text: 'connected',
        created: new Date(),
      });
      res.json(persona);
    }
  });
};

exports.read = (req, res) => { res.json(req.persona); };

exports.update = (req, res, next) => {
  Persona.findByIdAndUpdate(req.persona._id, persona.body, responser(res))
};

exports.delete = (req, res, next) => { req.persona.remove(responser(res)) };

exports.requireMobile = (req, res, next) => {
  if (!req.body.hasOwnProperty('uuid'))
    return res.status(401).send({ message: 'Not allowed' });
  else next();
};



exports.personaById = (req, res, next, id) => {
  Persona.findById(id, passer(req, 'persona', next))
};

exports.personaByUuId = (req, res, next, persona_uuid) => {
  Persona.findOne({ uuid: persona_uuid }, passer(req, 'persona', next))
};

exports.puedeVotar = (req, res, next) => {
  Promise
    .all([
      Persona.find({ email: req.body.email }).lean().exec(),
      Persona.find({ dni: req.body.dni }).lean().exec(),
    ])
    .then(([porEmail, porDni]) => {
      res.json({ puede_votar: !porEmail.length && !porDni.length });
    })
    .catch()
};
