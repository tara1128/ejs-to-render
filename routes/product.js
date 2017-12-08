/*
  routes/product.js
  2017-12-08 15:42
*/

var express = require('express');
var router = express.Router();
var pubNav = require('../data/menu');
var footer = require('../data/footer');

router.get('/en-us/product', function(req, res) {
  res.render('product', {
  });
});
router.get('/zh-cn/product', function(req, res) {
  res.render('product', {
  });
});

module.exports = router;
