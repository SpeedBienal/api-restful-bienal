// ---------------
// Aux
// ---------------
var hashPassword = function(req, res, next) {
  if (!req.body.password)
    return next({ status: 400, err: "No password!" }); // We can also throw an error from a before route
  req.body.password = bcrypt.hashSync(req.body.password, 10); // Using bcrypt
  return next(); // Call the handler
}

var sendEmail = function(req, res, next) {
  // We can get the user from res.bundle and status code from res.status and
  // trigger an error by calling next(err) or populate information that would otherwise be miggins
  next(); // I'll just pass though
}

var validateUser = function(req, res, next) {
  if (!req.body.creator) {
    return next({ status: 400, err: "Notes need a creator" });
  }
  User.Model.findById(req.body.creator, function(err, model) {
    if (!model) return next(restful.objectNotFound());
    return next();
  });
}

// ---------------
// Schema
// ---------------

// ---------------
// USER
// ---------------
var UserSchema = mongoose.Schema({
  username: 'string',
  password_hash: 'string',
});

var User = restful.model({
    title: "users",
    schema: UserSchema,
    methods: ['get', 'put', 'delete', {
      method: 'post',
      before: hashPassword, // Before we make run the default POST to create a user, we want to hash the password (implementation omitted)
      after: sendEmail, // After we register them, we will send them a confirmation email
    }]
});

User.register(app, '/user'); // Register the user model at the localhost:3000/user

// ---------------
// NOTE
// ---------------
var NoteSchema = mongoose.Schema({
  title: { type: 'string', required: true},
  body: { type: 'string', required: true},
  creator: { type: 'ObjectId', ref: 'user', require: true},
});

var Note = restful.model({
  title: "note",
  schema: NoteSchema,
  methods: ['get', 'delete', { method: 'post', before: validateUser }, { method: 'put', before: validateUser }],
});

Note.register(app, '/note');// Register the note model at the localhost:3000/note

// Costum routes

User.route("notes", {
  handler: function(req, res, next, err, model) { // we get err and model parameters on detail routes (model being the one model that was found)
    Note.Model.find({ creator: model._id }, function(err, list) {
      if (err) return next({ status: 500, err: "Something went wrong" });
      //res.status is the status code
      res.status = 200;

      // res.bundle is what is returned, serialized to JSON
      res.bundle = list;
      return next();
    });
  },
  detail: true, // detail routes operate on a single instance, i.e. /user/:id
  methods: ['get'], // only respond to GET requests
});

var movie = app.movie = restful.model("movies", mongoose.Schema({
    title: { type: 'string', required: true },
    year: { type: 'number', required: true },
    creator: {type: 'ObjectId', ref: 'users' },
    genre: {type: 'ObjectId', ref: 'genres'},
    comments: [{
      body: {type: 'String'},
      date: {type: 'Date'},
      author: { type: 'ObjectId', ref: 'users' }
    }],
    meta: {
      productionco: 'string',
      director: { type: 'ObjectId', ref: 'users' }
    },
    secret: { type: 'string', select: false }
  }));
movie.methods([
    {
      method: 'get',
      before: noop,
      after: noop
    },
    'post',
    'put',
    'delete'])
  .updateOptions({ new: true })
  .route('recommend', function(req, res, next) {
    res.locals.status_code = 200;
    res.locals.bundle.recommend = 'called';
    next();
  })
  .route('anotherroute', function(req, res, next) {
    res.writeHead(200, {'Content-Type': 'application/json' });
    res.write(JSON.stringify({
      anotherroute: "called"
    }));
    res.end(); // This ends the request and prevents any after filters from executing
  })
  .route('athirdroute', {
    handler: function(req, res, next) {
      res.locals.status_code = 200; // Store response status code
      res.locals.bundle = {
        athirdroute: "called" // And response data
      };
      next(); // Call *after* filters and then return the response'string'
    detail: true // Will mount the route at the detail endpoint /movies/:id/athirdroute
  })
  .route('pshh', {
    handler: [function(req, res, next) {
      next();
    }, function(req, res, next) {
      next();
    }, function(req, res, next) {
      res.locals.status_code = 200;
      res.locals.bundle = {
        pshh: "called"
      };
      next();
    }],
    methods: ['get', 'post']
  })
  .before('post', noop) // before a POST, execute noop
  .after('post', noop)
  .before('put', noop)
  .after('put', noop)
  .after('recommend', after)
  .after('athirdroute', after);

var genre = app.genre = restful.model("genres", mongoose.Schema({
    name: { type: 'string', required: true }
  }));
genre.methods(['get', 'put', 'delete']);
genre.shouldUseAtomicUpdate = false;

var review = app.genre = restful.model("reviews", mongoose.Schema({
    body: { type: 'string', required: true },
    length: { type: Number, min: 0, required: true} // https://github.com/baugarten/node-restful/issues/116
  }));
review.methods(['get', 'put', 'delete']);

user.register(app, '/users');
movie.register(app, '/api/movies');
genre.register(app, '/api/genres');
review.register(app, '/api/reviews');
