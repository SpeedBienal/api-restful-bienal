var users = require('../../app/controllers/user.server.controller.js');
var passport = require('passport');

module.exports = function( app ) {
  app.route( '/users' )
    .post( users.create )
    .get( users.list );

  app.route( '/users/username/:username' )
    .get( users.read )
    .put( users.requireLogin, users.isOwnerUsername, users.update )
    .delete( users.requireLogin, users.isOwnerUsername, users.delete );

  app.route( '/users/:userId' )
    .get( users.read )
    .put( users.requireLogin, users.isOwnerId, users.update )
    .delete( users.requireLogin, users.isOwnerId, users.delete );

  app.route( '/' )
    .get( users.renderHome );

  app.route( '/ingreso' )
    .get( users.renderSignIn )
    .post( passport.authenticate('local', {
      successRedirect: '/dashboard',
      failureRedirect: '/signin',
      failureFlash: true
      }));

  app.get( '/signout', users.signOut );

  app.route( '/registro' )
    .get( users.renderSignUp )
    .post( users.signUp );

  app.param( 'userId', users.userById );
  app.param( 'username', users.userByUsername );
};
