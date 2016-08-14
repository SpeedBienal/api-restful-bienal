var personas = require('../controllers/personas.server.controller.js');

module.exports = function (app) {
  app.route( '/personas' )
    .get( personas.list )
    .post( personas.requireLogin, personas.create );

  app.route( '/personas/:persona_id' )
    .get( personas.read )
    .put( personas.requireLogin, personas.update )
    .delete( personas.requireLogin, personas.delete );

  app.route( '/personas/uuid/:persona_uuid' )

  app.param( 'persona_id', personas.personaById );
  app.param( 'persona_uuid', personas.personaOneByUuId );

}
