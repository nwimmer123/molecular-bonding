var express = require('express');
// generate a new express app and call it 'app'
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var html = require('html');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/custom-extras.js');
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/bundle.js');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


