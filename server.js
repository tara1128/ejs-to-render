/*
  server.js
  2017-12-07 16:43
*/

var path = require('path');
var express = require('express');
var app = express();
var index = require('./routes/index');
var about = require('./routes/about');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);
app.use('/about', index);

app.listen(8027);
console.log('Port 8027 is now running !');
