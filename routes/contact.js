/*
  routes/contact.js
  2017-12-08 15:42
*/

var express = require('express');
var router = express.Router();
var pubNav = require('../data/menu');
var footer = require('../data/footer');

router.get('/en-us/contact', function(req, res) {
  res.render('contact', {
  });
});
router.get('/zh-cn/contact', function(req, res) {
  res.render('contact', {
  });
});

module.exports = router;
