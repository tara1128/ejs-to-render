/*
  routes/index.js
  2017-12-11 17:32
*/

var express = require('express');
var router = express.Router();
var topbar = require('../data/menu');
var footer = require('../data/footer');
var intros = require('../data/intro');
var product = require('../data/product');
var PublicNav = new Object;

Object.keys(topbar.CMCM_PublicNav).forEach(function(lang, i) {
  var datas = topbar.CMCM_PublicNav[lang];
  PublicNav[lang] = datas;
});


router.get('/en-us', function(req, res) {
  res.render('index', {
    lang: 'en-us',
    name: PublicNav['en-us'].name,
    pubNavList: PublicNav['en-us'].data,
    title: PublicNav['en-us'].title,
    keywords: PublicNav['en-us'].keywords,
    description: PublicNav['en-us'].description,
    footerContents: 'Footer contents here'
  });
});

router.get('/zh-cn', function(req, res) {
  res.render('index', {
    lang: 'zh-cn',
    name: PublicNav['zh-cn'].name,
    pubNavList: PublicNav['zh-cn'].data,
    title: PublicNav['zh-cn'].title,
    keywords: PublicNav['zh-cn'].keywords,
    description: PublicNav['zh-cn'].description,
    footerContents: '页脚内容'
  });
});

module.exports = router;
