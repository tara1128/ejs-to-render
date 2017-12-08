/*
  routes/about.js
  2017-12-08 15:42
*/

var express = require('express');
var router = express.Router();
var pubNav = require('../data/menu');
var footer = require('../data/footer');

router.get('/en-us/about', function(req, res) {
  res.render('about', {
    lang: 'ENEN',
    title: 'EN About Cheetah Mobile',
    keywords: 'About page keywords here ...',
    description: 'Description in about page',
    topbarContents: 'In about page. Top bar contents, in header.ejs',
    footerContents: 'In about page. Footer contents here'
  });
});
router.get('/zh-cn/about', function(req, res) {
  res.render('about', {
    lang: 'CN',
    title: 'CN 关于公司',
    keywords: 'CN About page keywords here ...',
    description: 'CN Description in about page',
    topbarContents: 'CN In about page. Top bar contents, in header.ejs',
    footerContents: 'CN In about page. Footer contents here'
  });
});

module.exports = router;
