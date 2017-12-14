/*
  routes/index.js
  2017-12-14 12:16
*/

var express = require('express');
var router = express.Router();
var dataObject = require('./dataObject');

router.get('/en-us', function(req, res) {
  res.render('index', dataObject('en-us'));
});

router.get('/zh-cn', function(req, res) {
  res.render('index', dataObject('zh-cn'));
});

module.exports = router;
