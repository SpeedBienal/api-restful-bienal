var obra = require('../controllers/obra.server.controller');

module.exports = function( app ) {
  app.route( '/api/v1/obras' )
    .get( obra.list )
    .post( obra.create );

  app.route( '/api/v1/obras/:obraId' )
    .get( obra.read )
    .put( obra.update )
    .delete( obra.delete );

  app.route( '/api/v1/obras/categorias/:categoria')
    .get( obra.read );

  app.route( '/api/v1/obras/backup/json' )
    .get( obra.pretty_list );

  app.param( 'obraId', obra.obraByID );
  app.param( 'categoria', obra.obraByCategoria );
};
