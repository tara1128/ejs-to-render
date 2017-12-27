/*
  routes/productPageData.js
  2017-12-27 11:25
*/

var product = require('../data/product');

module.exports = function(lang) {
  var productData = product.CMCM_ProductList[lang],
      category = productData.category,
      mobileApps = category.mobileApps,
      pc = category.pc,
      ai = category.ai,
      bigData = category.bigData,
      business = category.business,
      hardware = null;
  if (category.hardware) {
    hardware = category.hardware;
  }

  return {
    mobileAppsName: mobileApps.categoryName,
    mobileAppsLink: mobileApps.categoryLink,
    mobileAppsData: mobileApps.categoryData,

    mobileAppTool: mobileApps.categoryData.tool,
    mobileAppSocl: mobileApps.categoryData.socl,
    mobileAppGame: mobileApps.categoryData.game,

    pcName: pc.categoryName,
    pcLink: pc.categoryLink,
    pcData: pc.categoryData,

    aiName: ai.categoryName,
    aiLink: ai.categoryLink,
    aiData: ai.categoryData,

    bigDataName: bigData.categoryName,
    bigDataLink: bigData.categoryLink,
    bigDataData: bigData.categoryData,

    businessName: business.categoryName,
    businessLink: business.categoryLink,
    businessData: business.categoryData,

    hardware: hardware
  }
};
