/*
  routes/about.js
  2017-12-25 17:43
*/

var express = require('express');
var router = express.Router();
var mergeObjects = require('merge');
var publicData = require('./publicData');
var aboutPageData = require('./aboutPageData');

router.get('/en-us/about', function(req, res) {
  var lang = 'en-us';
  res.render('about', mergeObjects(aboutPageData(lang), publicData(lang)));
});

router.get('/zh-cn/about', function(req, res) {
  var lang = 'zh-cn';
  res.render('about', mergeObjects(aboutPageData(lang), publicData(lang)));
});

module.exports = router;
