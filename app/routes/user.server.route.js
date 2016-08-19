var users = require('../../app/controllers/user.server.controller.js');
var passport = require('passport');

module.exports = function( app ) {
  app.route( '/api/v1/users' )
    .post( users.create )
    .get( users.list );

  app.route( '/api/v1/users/username/:username' )
    .get( users.read )
    .put( users.requireLogin, users.isOwnerUsername, users.update )
    .delete( users.requireLogin, users.isOwnerUsername, users.delete );

  app.route( '/api/v1/users/:userId' )
    .get( users.read )
    .put( users.requireLogin, users.isOwnerId, users.update )
    .delete( users.requireLogin, users.isOwnerId, users.delete );

  app.get( '/' , users.renderHome );

  app.get( '/salir', users.signOut );

  app.route( '/ingreso' )
    .get( users.renderSignIn )
    .post( passport.authenticate('local', {
      successRedirect: '/dashboard',
      failureRedirect: '/ingreso',
      failureFlash: true
      }));

  app.route( '/registro' )
    .get( users.renderSignUp )
    .post( users.signUp );

  app.param( 'userId', users.userById );
  app.param( 'username', users.userByUsername );
};
