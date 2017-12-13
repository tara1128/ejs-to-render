/*
  routes/index.js
  2017-12-13 20:00
*/

var express = require('express');
var router = express.Router();

/* Datas performed as Json: */
var langs = require('../data/langs');
var topbar = require('../data/menu');
var intros = require('../data/intro');
var company = require('../data/company');
var product = require('../data/product');
var contact = require('../data/contact');
var footer = require('../data/footer');


router.get('/en-us', function(req, res) {
  var lang = 'en-us';
  res.render('index', {
    Lang: lang,
    langsCollection: langs.CMCM_Langs,
    name: topbar.CMCM_PublicNav[lang].name,
    pubNavList: topbar.CMCM_PublicNav[lang].data,
    title: topbar.CMCM_PublicNav[lang].title,
    keywords: topbar.CMCM_PublicNav[lang].keywords,
    description: topbar.CMCM_PublicNav[lang].description,
    companyInfos: company.CMCM_CompanyInfoList[lang],
    productInfos: product.CMCM_ProductList[lang],
    contactInfos: contact.CMCM_ContactList[lang],
    pubFooter: footer.CMCM_PublicFooter[lang]
  });
});

router.get('/zh-cn', function(req, res) {
  var lang = 'zh-cn';
  res.render('index', {
    Lang: lang,
    langsCollection: langs.CMCM_Langs,
    name: topbar.CMCM_PublicNav[lang].name,
    pubNavList: topbar.CMCM_PublicNav[lang].data,
    title: topbar.CMCM_PublicNav[lang].title,
    keywords: topbar.CMCM_PublicNav[lang].keywords,
    description: topbar.CMCM_PublicNav[lang].description,
    companyInfos: company.CMCM_CompanyInfoList[lang],
    productInfos: product.CMCM_ProductList[lang],
    contactInfos: contact.CMCM_ContactList[lang],
    pubFooter: footer.CMCM_PublicFooter[lang]
  });
});

module.exports = router;
