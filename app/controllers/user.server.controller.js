var User = require('mongoose').model('User');
var passport = require('passport');

var getErrorMessage = err => {
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
    return res.status(401).send( { message: 'El usuario no esta loggeado' } );
  }
  next();
};

exports.isOwnerId = function ( req, res, next, id ) {
  User.findById(id, (err, user) => {
    if (err) return next(err);
    else {
      if ( req.user._id !== user._id )
        return res.status(401).send({message: 'El usuario no esta autorizado para realizar estas acciones'});
      next();
    }
  });
};

exports.isOwnerUsername = function ( req, res, next, username ) {
  User.findOneByUsername( username, function ( err, user ) {
    if (err) {
      return next(err);
    } else {
      if ( req.user._id !== user._id ) {
        return res.status(401).send({message: 'El usuario no esta autorizado para realizar estas acciones'});
      }
      next();
    }
  });
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
  res.redirect( '/ingreso' );
};

exports.renderSignIn = function ( req, res, next ) {
  if ( !req.user ) {
    res.render( 'signin', {
      title: 'Ingreso al sistema',
      messages: req.flash('error') || req.flash('info')
    });
  } else {
    return res.redirect( '/dashboard' );
  }
};

exports.renderSignUp = function ( req, res, next ) {
  if ( req.user ) {
    res.render( 'signup', {
      title: 'Formulario de registro',
      messages: req.flash( 'error' )
    });
  } else {
    return res.redirect( '/ingreso' );
  }
};

exports.renderHome = function ( req, res ) {
  res.render( 'inicio' );
}

exports.renderDashboard = function ( req, res ) {
  res.render( 'dashboard', {usuario: req.user} );
}

exports.renderDeveloperNotes = function( req, res ) {
  res.render( 'developers' );
}

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
