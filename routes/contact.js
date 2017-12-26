/*
  routes/contact.js
  2017-12-26 16:25
*/

var express = require('express');
var router = express.Router();
var mergeObjects = require('merge');
var publicData = require('./publicData');
var contactPageData = require('./contactPageData');

router.get('/en-us/contact', function(req, res) {
  var lang = 'en-us';
  res.render('contact', mergeObjects(contactPageData(lang), publicData(lang)));
});

router.get('/zh-cn/contact', function(req, res) {
  var lang = 'zh-cn';
  res.render('contact', mergeObjects(contactPageData(lang), publicData(lang)));
});

module.exports = router;
