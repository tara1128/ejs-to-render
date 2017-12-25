/*
  routes/aboutPageData.js
  2017-12-25 19:00
*/

var company = require('../data/company');

module.exports = function(lang) {
  var companyData = company.CMCM_CompanyInfoList[lang],
      category = companyData.category,
      mission = category.missionVisions,
      introduction = category.introduction,
      history = category.devHistory,
      executive = category.leaderTeam,
      culture = category.corCulture,
      welfare = category.empWelfare;

  return {
    missionName: mission.categoryName,
    missionLink: mission.categoryLink,
    missionData: mission.categoryData,

    introductionName: introduction.categoryName,
    introductionLink: introduction.categoryLink,
    introductionData: introduction.categoryData,

    historyName: history.categoryName,
    historyLink: history.categoryLink,
    historyData: history.categoryData,

    executiveName: executive.categoryName,
    executiveLink: executive.categoryLink,
    executiveData: executive.categoryData,

    cultureName: culture.categoryName,
    cultureLink: culture.categoryLink,
    cultureData: culture.categoryData,

    welfareName: welfare.categoryName,
    welfareLink: welfare.categoryLink,
    welfareData: welfare.categoryData,

  };
};
