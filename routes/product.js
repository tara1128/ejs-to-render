/*
  routes/product.js
  2017-12-26 18:58
*/

var express = require('express');
var router = express.Router();
var mergeObjects = require('merge');
var publicData = require('./publicData');
var productPageData = require('./productPageData');

router.get('/en-us/product', function(req, res) {
  var lang = 'en-us';
  res.render('product', mergeObjects(productPageData(lang), publicData(lang)));
});

router.get('/zh-cn/product', function(req, res) {
  var lang = 'zh-cn';
  res.render('product', mergeObjects(productPageData(lang), publicData(lang)));
});

module.exports = router;
