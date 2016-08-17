var User = require('mongoose').model('User');
var passport = require('passport');

var getErrorMessage = function( err ) {
  var message = '';
  if ( err.code ) {
    switch ( err.code ) {
      case 11000:
      case 11001:
        message = 'Username ya existente';
        break;
      default:
        message = 'Woophs, something goes wrong!';
    }
  } else {
    for ( var errName in err.errors ) {
      if ( err.errors[ errName ].message )
      message = err.errors[errName].message;
    }
  }
  return message;
};

exports.requireLogin = function ( req, res, next ) {
  if ( !req.isAuthenticated() ) {
    return res.status(401).send( { message: 'User is not logged in' } );
  }
  next();
};

exports.renderSignIn = function ( req, res, next ) {
  if ( !req.user ) {
    res.render( 'signin', { title: 'Sign-in Form', messages: req.flash('error') || req.flash('info')});
  } else {
    return res.redirect( '/' );
  }
};

exports.renderSignUp = function ( req, res, next ) {
  if ( !req.user ) {
    res.render( 'signup', { title: 'Sign-up Form', messages: req.flash( 'error' ) } );
  } else {
    return res.redirect( '/' );
  }
};

exports.signUp = function ( req, res, next ) {
  if ( !req.user ) {
    var user = new User( req.body );
    var messages = null;

    user.provider = 'local';

    user.save(function ( err ) {
      if ( err ) {
        var messages = getErrorMessage( err );
        req.flash( 'error', messages );
        return res.redirect( '/' );
      }
      req.login(user, function(err) {
        if (err) return next(err);
        return res.redirect('/');
      });
    });
  } else {
    return res.redirect('/');
  }
};

exports.signOut = function ( req, res ) {
  req.logout();
  res.redirect( '/' );
};

exports.saveOAuthUserProfile = function ( req, profile, done ) {
  User.findOne({provider: profile.provider, providerId: profile.providerId}, function ( err, user ) {
    if ( err ) {
      return done( err );
    } else {
      if ( !user ) {
        var posibleName = profile.username || ( profile.email ? prfile.email.split('@')[0] : '' );
        User.findUniqueUsername( posibleName, null, function (avaibleUser) {
          profile.username = avaibleUser;

          user = new User(profile);
          user.save( function ( err ) {
            if ( err ) {
              var message = getErrorMessage( err );
              req.flash('error', message);
              return res.redirect('/signup');
            }
            return done( err, user );
          });
        });
      } else {
        return done( err, user );
      }
    }
  });
};

exports.create = function ( req, res, next ) {
  var user = new User( req.body );
  user.save(function ( err ) {
    if ( err ) {
      return next( err );
    } else {
      res.json( user );
    }
  });
};

exports.list = function ( req, res, next ) {
  User.find( {}, function ( err, users ) {
    if ( err ) {
      return next( err );
    } else {
      res.json( users );
    }
  } );
};

exports.read = function ( req, res ) {
  res.json( req.user );
};

exports.userById = function ( req, res, next, id ) {
  User.findOne( { _id : id }, function ( err, user ) {
    if ( err ) {
      return next( err );
    } else {
      req.user = user;
      next();
    }
  });
};

exports.userByUsername = function ( req, res, next, username ) {
  User.findOneByUsername( username, function ( err, user ) {
    if ( err ) {
      return next( err );
    } else {
      req.user = user;
      next();
    }
  } );
}

exports.update = function ( req, res, next ) {
  User.findByIdAndUpdate( req.user.id, req.body, function ( err, user ) {
    if ( err ) {
      return next( err );
    } else {
      res.json( user );
    }
  } );
};

exports.delete = function ( req, res, next ) {
  req.user.remove( function ( err, user ) {
    if ( err ) {
      return next( err );
    } else {
      res.json( req.user );
    }
  })
};
