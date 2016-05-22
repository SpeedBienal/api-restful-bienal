var config = require('./config');

var http = require('http');

// Express
var express = require('express');
var restful = require('node-restful');
// Middleware
var morgan = require('morgan');
var compress = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
// Sessions
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

// Login
var flash = require('connect-flash');

module.exports = function( db ) {
  var app = express();
  var server = http.createServer( app );

  if ( process.env.NODE_ENV === 'development' ) {
    app.use( morgan( 'dev' ) );
  } else if ( process.env.NODE_ENV === 'production' ) {
    app.use( compress() );
  }

  // Modules use
  app.use( bodyParser.urlencoded( { extended: true } ) );
  app.use( bodyParser.json() );
  app.use( bodyParser.json( {type:'application/vnd.api+json'} ) );
  app.use( methodOverride() );

  var mongoStore = new MongoStore( {mongooseConnection: db.connection } ); // me da error de conexion

  app.use( session( {
    saveUninitialized: true,
    resave: true,
    secret: config.sessionSecret,
    store: mongoStore,
  }));

  app.use( flash() );

  // Sets de Express
  app.set( 'views', './app/views' );
  app.set( 'view engine', 'jade' );


  //Express api
  app.use( express.static( './public' ) );

  //Carga de modelos y routeados
  var Persona = require('../app/models/persona.server.model.js');
  var Artista = require('../app/models/artista.server.model.js');
  var Campo = require('../app/models/campo.server.model.js');
  var Categoria = require('../app/models/categoria.server.model.js');
  var Obra = require('../app/models/obra.server.model.js');
  var Voto = require('../app/models/voto.server.model.js');

  Persona.register( app, '/personas' );
  Artista.register( app, '/artistas' );
  Campo.register( app, '/campos' );
  Categoria.register( app, '/categorias' );
  Obra.register( app, '/obras' );
  Voto.register( app, '/votos' );

  return server;
};
