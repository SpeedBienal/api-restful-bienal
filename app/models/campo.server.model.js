var mongoose = require('mongoose');
var restful = require('node-restful');

var Campo = restful.model( 'campo', new mongoose.Schema({
  nombre: {
    type: 'String',
    required: true,
  },
}))
.methods([ 'get', 'post', 'put', 'delete' ]);

module.exports = Campo;
