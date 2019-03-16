var voto = require('../controllers/voto.server.controller');

module.exports = function ( app ) {
  app.route( '/api/v1/votos' )
    .get( voto.list );

  app.route( '/api/v1/votacion' )
    .get( voto.list_short );

  app.route( '/votacion' )
    .get( voto.renderVotacion );

  app.route( '/api/v1/votacion/:categoria_voto' )
    .get( voto.total_top );

  app.param( 'categoria_voto', voto.single_top );
};
