var config = require('./config');
// WebSockets
var http = require('http');
var socketio = require('socket.io');
// Express
var express = require('express');
// Middleware
var morgan = require('morgan');
var compress = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

module.exports = function( db ) {
  var app = express();
  var server = http.createServer( app );
  var io = socketio.listen( server );

  // TODO: cambiar este global
  global.io = io;

  if ( process.env.NODE_ENV === 'development' ) {
    app.use( morgan( 'dev' ) );
  } else if ( process.env.NODE_ENV === 'production' ) {
    app.use( compress() );
  }

  // Modules use
  app.use( bodyParser.urlencoded( { extended: true } ) );
  app.use( bodyParser.json() );
  app.use( methodOverride() );

  // Sets de Express
  app.set( 'views', './app/views' );
  app.set( 'view engine', 'jade' );

  //Require a las rutas
  require( '../app/routes/voto.server.route.js' )( app );//, server, io );
  require( '../app/routes/persona.server.route.js' )( app );
  require( '../app/routes/obras.server.route.js' )( app );

  //Express api
  app.use( express.static( './public' ) );
  require('./socketio')( server, io );

  return server;
};
