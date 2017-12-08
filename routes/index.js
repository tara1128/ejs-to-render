/*
  routes/index.js
  2017-12-08 15:42
*/

var express = require('express');
var router = express.Router();
var pubNav = require('../data/menu');
var footer = require('../data/footer');
var intros = require('../data/intro');
var product = require('../data/product');

// Note that 'res.render()' will look in a views folder for the view,
// so 'pages/index' is actually the full path 'views/pages/index'.
/*
var nav = pubNav.CMCM_PublicNav;
for (var lang in nav) {
  router.get('/' + lang, function(req, res) {
    res.render('index', {
      lang: lang,
      title: nav[lang].title,
      keywords: nav[lang].keywords,
      description: nav[lang].description,
      topbarContents: 'Top bar contents, in header.ejs',
      footerContents: 'Footer contents here'
    });
  });
};
*/

router.get('/en-us', function(req, res) {
  res.render('index', {
    lang: 'EN',
    title: 'ENENENEN Cheetah Mobile',
    keywords: 'Keywords ...',
    description: 'Description',
    topbarContents: 'Top bar contents, in header.ejs',
    footerContents: 'Footer contents here'
  });
});

router.get('/zh-cn', function(req, res) {
  res.render('index', {
    lang: 'CN',
    title: 'CN 猎豹移动',
    keywords: 'Keywords ...',
    description: 'Description',
    topbarContents: '中文的top bar导航',
    footerContents: 'Footer contents here'
  });
});

router.get('/ru-ru', function(req, res) {
  res.render('index', {
    lang: 'CN',
    title: 'RU RU',
    keywords: 'Keywords ...',
    description: 'Description',
    topbarContents: '俄语的导航',
    footerContents: 'Footer contents here'
  });
});





module.exports = router;
