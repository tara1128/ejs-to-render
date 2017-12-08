/*
  routes/index.js
  2017-12-08 18:55
*/

var express = require('express');
var router = express.Router();
var topbar = require('../data/menu');
var footer = require('../data/footer');
var intros = require('../data/intro');
var product = require('../data/product');

/*
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
Object.keys(topbar.CMCM_PublicNav).forEach(function(lang, i) {
  var datas = topbar.CMCM_PublicNav[lang];
  console.log( 'datas =====> ', datas );
});




router.get('/en-us', function(req, res) {
  res.render('index', {
    lang: 'EN',
    name: 'nameee',
    pubNavList: '000',
    title: 'ENENENEN Cheetah Mobile',
    keywords: 'Keywords ...',
    description: 'Description',
    topbarContents: 'Top bar contents, in header.ejs',
    footerContents: 'Footer contents here'
  });
});


/*
router.get('/zh-cn', function(req, res) {
  res.render('index', {
  });
});

router.get('/ru-ru', function(req, res) {
  res.render('index', {
  });
});
*/



module.exports = router;
