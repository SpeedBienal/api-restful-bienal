module.exports = {
  db : 'mongodb://localhost/mean-book',
  sessionSecret : 'developmentSessionSecret',
  twitter: {
    consumerKey: 'cs6B77jUI45rnzEOF8RFj7Nbz',
    consumerSecret: 'QxY8cvSSSAsLSIuszBKC0Csn9QWXKcnshZtimGUy0iNnic7ZI1',
    callbackURL: 'http://localhost:3000/oauth/twitter/callback'
  },
  google: {
    clientID: '924467659890-p7d2c1hn000d3mga5ajm5hvj6di4akp4.apps.googleusercontent.com',
    clientSecret: '4XgrrVYQ9KPDYTULWfmGnYKE',
    callbackURL: 'http://localhost:3000/oauth/google/callback'
  }
};
