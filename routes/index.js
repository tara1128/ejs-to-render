/*
  routes/index.js
  2017-12-18 16:05
*/

var express = require('express');
var router = express.Router();
var mergeObjects = require('merge');
var publicData = require('./publicData');
var frontpageData = require('./frontpageData');


router.get('/en-us', function(req, res) {
  var lang = 'en-us';
  res.render('index', mergeObjects(frontpageData(lang), publicData(lang)));
});

router.get('/zh-cn', function(req, res) {
  var lang = 'zh-cn';
  res.render('index', mergeObjects(frontpageData(lang), publicData(lang)));
});

module.exports = router;
