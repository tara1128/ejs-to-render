/*
  server.js
  2017-12-08 15:41
*/

var path = require('path');
var express = require('express');
var app = express();
var langs = require('./data/langs');
var index = require('./routes/index');
var about = require('./routes/about');
/*
var langDirArray = [];
langs.CMCM_Langs.forEach(function(lang, index){
  langDirArray.push( __dirname + '/views/pages/' + lang );
});
console.log('langDirArray =====> ', langDirArray);
*/

app.set('views', 'views/pages/');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', [index, about]);
// app.use('/', about);

app.listen(8027);
console.log('Port 8027 is now running !');
