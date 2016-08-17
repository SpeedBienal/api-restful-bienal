var personas = require('../controllers/persona.server.controller.js');

module.exports = function (app) {
  app.route( '/api/v1/personas' )
    .get( personas.list )
    .post( personas.requireMobile, personas.create );

  app.route( '/api/v1/personas/:persona_id' )
    .get( personas.read );

  app.route( '/api/v1/personas/uuid/:persona_uuid' )
    .get( personas.read );

  app.param( 'persona_id', personas.personaById );
  app.param( 'persona_uuid', personas.personaByUuId );

}
