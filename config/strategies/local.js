var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('mongoose').model('User');

module.exports = function () {
  passport.use( new LocalStrategy( function ( username, password, done ) {
    User.findOne( { username: username }, function ( err, user ) {
      if ( err ) {
        return done( err );
      }

      if ( !user ) {
        return done( null, false, { message: 'Usuario o contraseña incorrectos' } );//Sino te hacen fuerza bruta
      }

      if ( !user.validatePassword( password ) ) {
        return done( null, false, { message: 'Usuario o contraseña incorrectos' } );//Sino te hacen fuerza bruta
      }

      return done( null, user );

    } );
  } ) );
};
