var users = require('../../app/controllers/users.server.controller.js');
var passport = require('passport');

module.exports = function( app ) {
  app.route( '/users' )
    .post( users.create )
    .get( users.list );

  app.route( '/users/username/:username' )
    .get( users.read )
    .put( users.update )
    .delete( users.delete );

  app.route( '/users/:userId' )
    .get( users.read )
    .put( users.update )
    .delete( users.delete );

    app.route( '/signin' )
      .get( users.renderSignIn )
      .post( passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/signin',
        failureFlash: true
        })
      );

    app.route( '/signup' )
      .get( users.renderSignUp )
      .post( users.signUp);

    app.get( '/signout', users.signOut );

    app.get('/oauth/twitter', passport.authenticate('twitter', {
      failureRedirect: '/signin'
    }));
    app.get('/oauth/twitter/callback', passport.authenticate('twitter', {
      failureRedirect: '/signin',
      successRedirect: '/'
    }));

    app.get('/oauth/google', passport.authenticate('google', {
      failureRedirect: '/signin',
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
      ],
    }));
    app.get('/oauth/google/callback', passport.authenticate('google', {
      failureRedirect: '/signin',
      successRedirect: '/'
    }));

  app.param( 'userId', users.userById );
  app.param( 'username', users.userByUsername );
};
