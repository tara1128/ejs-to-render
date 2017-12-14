/*
  server.js
  2017-12-13 19:53
*/

var path = require('path');
var express = require('express');
var app = express();
var langs = require('./data/langs');
var index = require('./routes/index');
var about = require('./routes/about');
var product = require('./routes/product');
var contact = require('./routes/contact');

app.set('views', 'views/pages/');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', [index, about, product, contact]);

app.listen(8027);
console.log('Port 8027 is now running ... .');
