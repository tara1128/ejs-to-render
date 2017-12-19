/*
  routes/frontpageData.js
  2017-12-19 11:31
*/

var intros = require('../data/intro');
var product = require('../data/product');

module.exports = function(lang) {
  var introData = intros.CMCM_IntrosToIndex[lang];
  var category = product.CMCM_ProductList[lang].category,
      aiData = category.ai.categoryData.ai,
      aiDataForIndex = aiData.data[1],
      categoriesCollect = category.mobileApps.categoryData,
      cateForIndex_Tool = categoriesCollect.tool,
      cateForIndex_Socl = categoriesCollect.socl,
      cateForIndex_Game = categoriesCollect.game,
      toolsOnIndex = cateForIndex_Tool.data,
      socialOnIndex = cateForIndex_Socl.data,
      gamesOnIndex = cateForIndex_Game.data;
  var CleanMaster = toolsOnIndex[0],
      SecurityMaster = toolsOnIndex[1],
      CMLauncher = toolsOnIndex[2],
      Keyboard = toolsOnIndex[3],
      PhotoGrid = toolsOnIndex[4],
      CMBrowser = toolsOnIndex[5];
  return {
    indexSlogan: introData.slogan,
    indexSubslogan: introData.subslogan,
    secTitleAI: aiData.name,
    secDescrAI: aiData.desc,
    aiProLink: aiDataForIndex.link,
    aiProTarg: aiDataForIndex.target,
    aiProName: aiDataForIndex.name,
    aiProDesc: aiDataForIndex.descForIndex,
    aiProTags: aiDataForIndex.tags,
    secTitleTools: cateForIndex_Tool.name,
    secDescrTools: cateForIndex_Tool.desc,
    secTitleSocial: cateForIndex_Socl.name,
    secDescrSocial: cateForIndex_Socl.desc,
    secTitleGames: cateForIndex_Game.name,
    secDescrGames: cateForIndex_Game.desc,

    CleanMasterBigPic: CleanMaster.pict,
    CleanMasterName: CleanMaster.name,
    CleanMasterLink: CleanMaster.link,
    CleanMasterIcon: CleanMaster.icon,
    CleanMasterDescForIndex: CleanMaster.descForIndex,
    CleanMasterStar: CleanMaster.star,
    CleanMasterTags: CleanMaster.tags,

    SecurityMasterName: SecurityMaster.name,
    SecurityMasterLink: SecurityMaster.link,
    SecurityMasterIcon: SecurityMaster.icon,
    SecurityMasterDescForIndex: SecurityMaster.descForIndex,
    SecurityMasterStar: SecurityMaster.star,
    SecurityMasterTags: SecurityMaster.tags,

    CMLauncherName: '',
    CMLauncherLink: '',
    CMLauncherIcon: '',
    CMLauncherDescForIndex: '',
    CMLauncherStar: '',
    CMLauncherTags: '',

    KeyboardName: '',
    KeyboardLink: '',
    KeyboardIcon: '',
    KeyboardDescForIndex: '',
    KeyboardStar: '',

    PhotoGridName: '',
    PhotoGridLink: '',
    PhotoGridIcon: '',
    PhotoGridDescForIndex: '',
    PhotoGridStar: '',

    CMBrowserName: '',
    CMBrowserLink: '',
    CMBrowserIcon: '',
    CMBrowserDescForIndex: '',
    CMBrowserStar: '',
  };
};
