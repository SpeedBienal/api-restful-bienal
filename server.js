#! /usr/bin/env node

// Variable de entrono 'development'/'production'
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Cargo mongoose y sus configuraciones
var mongoose = require('./config/mongoose');

// Cargo express y sus configuraciones
var express = require('./config/express');

// Cargo passport.js para manejo de loggin y sesiones
var passport = require('./config/passport');

// Inicializaciones
var db = mongoose();
var app = express( db );
var passport = passport();

app.listen(3000);

module.exports = app;

console.log('Server running at http://localhost:3000/');
