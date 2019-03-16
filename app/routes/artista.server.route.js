var artista = require('../controllers/artista.server.controller');
var user = require('../controllers/user.server.controller');

module.exports = function( app ) {
  app.route( '/api/v1/artistas' )
    .get( artista.list )
    .post( user.requireLogin, artista.create );

  app.route( '/api/v1/artistas/:artista_id' )
    .get( artista.read )
    .put( user.requireLogin, artista.update )
    .delete( user.requireLogin, artista.delete );

  app.route( '/api/v1/artistas/dni/:artista_dni')
    .get( artista.read )
    .put( user.requireLogin, artista.update )
    .delete( user.requireLogin, artista.delete );

  app.get( '/artistas', artista.renderArtista );

  app.param( 'artista_id', artista.artistaByID );
  app.param( 'artista_dni', artista.artistaByDni );
};

//el id de mongo esta indexado y corre mas rápido, 0 ms de latencia, no se, velo
