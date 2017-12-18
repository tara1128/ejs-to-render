/*
  routes/about.js
  2017-12-18 14:33
*/

var express = require('express');
var router = express.Router();
var publicData = require('./publicData');

router.get('/en-us/about', function(req, res) {
  res.render('about', publicData('en-us'));
});

router.get('/zh-cn/about', function(req, res) {
  res.render('about', publicData('zh-cn'));
});

module.exports = router;
