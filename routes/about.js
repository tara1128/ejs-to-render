/*
  routes/about.js
  2017-12-14 11:28
*/

var express = require('express');
var router = express.Router();
var dataObject = require('./dataObject');

router.get('/en-us/about', function(req, res) {
  res.render('about', dataObject('en-us'));
});

router.get('/zh-cn/about', function(req, res) {
  res.render('about', dataObject('zh-cn'));
});

module.exports = router;
