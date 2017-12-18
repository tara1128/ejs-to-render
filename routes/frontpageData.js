/*
  routes/frontpageData.js
  2017-12-18 17:41
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
      cateForIndex_Game = categoriesCollect.game;
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
    secDescrGames: cateForIndex_Game.desc
  };
};
