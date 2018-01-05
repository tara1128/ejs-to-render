/*
  routes/product.js
  2018-01-05 16:18
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

router.get('/zh-tw/product', function(req, res) {
  var lang = 'zh-tw';
  res.render('product', mergeObjects(productPageData(lang), publicData(lang)));
});

module.exports = router;
