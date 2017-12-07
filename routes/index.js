// routes/index

var express = require('express');
var router = express.Router();
var pubNav = require('../data/menu');
var intros = require('../data/intro');
var footer = require('../data/footer');
var product = require('../data/product');
var Routers = {};

// Note that 'res.render()' will look in a views folder for the view,
// so 'pages/index' is actually the full path 'views/pages/index'.


var nav = pubNav.CMCM_PublicNav;
for (var lang in nav) {
  var dir_path = '/' + lang + '/';
  var page_path = 'pages/' + lang + '/index';
  router.get(dir_path, function(req, res) {
    res.render(page_path, {
      lang: lang,
      title: nav[lang].title,
      keywords: nav[lang].keywords,
      description: nav[lang].description,
      topbarContents: 'Top bar contents, in header.ejs',
      footerContents: 'Footer contents here'
    });
  });
  Routers[lang] = router;
};


module.exports = Routers;
