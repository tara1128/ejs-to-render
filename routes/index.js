// routes/index

var express = require('express');
var router = express.Router();

// Note that 'res.render()' will look in a views folder for the view,
// so 'pages/index' is actually the full path 'views/pages/index'.
router.get('/', function(req, res) {


  res.render('pages/index', {
    lang: 'zh-cn',
    title: 'Cheetah Mobile',
    keywords: 'CleanMaster, Security Master, PhotoGrid, Cheetah Keyboard...',
    description: 'Cheetah Mobile is a leading mobile internet company dedicated to making the world smarter.',
    topbarContents: 'Top bar contents, in header.ejs',
    footerContents: 'Footer contents here'
  });
});

module.exports = router;
