/*
  routes/contact.js
  2017-12-18 14:39
*/

var express = require('express');
var router = express.Router();
var publicData = require('./publicData');

router.get('/en-us/contact', function(req, res) {
  res.render('contact', publicData('en-us'));
});

router.get('/zh-cn/contact', function(req, res) {
  res.render('contact', publicData('en-us'));
});

module.exports = router;
