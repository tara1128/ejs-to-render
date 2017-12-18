/*
  routes/product.js
  2017-12-18 15:42
*/

var express = require('express');
var router = express.Router();
var publicData = require('./publicData');

router.get('/en-us/product', function(req, res) {
  res.render('product', publicData('en-us'));
});

router.get('/zh-cn/product', function(req, res) {
  res.render('product', publicData('en-us'));
});

module.exports = router;
