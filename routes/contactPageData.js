/*
  routes/contactPageData.js
  2017-12-26 16:27
*/

var contact = require('../data/contact');

module.exports = function(lang) {
  var contactData = contact.CMCM_ContactList[lang],
      category = contactData.category,
      media = category.mediaContact,
      social = category.socialMedia,
      business = category.businessContact,
      offices = category.globalOffice,
      customer = category.customerSupport;

  return {
    mediaName: media.categoryName,
    mediaLink: media.categoryLink,
    mediaData: media.categoryData,

    socialName: social.categoryName,
    socialLink: social.categoryLink,
    socialData: social.categoryData,

    businessName: business.categoryName,
    businessLink: business.categoryLink,
    businessData: business.categoryData,

    officesName: offices.categoryName,
    officesLink: offices.categoryLink,
    officesData: offices.categoryData,

    customerName: customer.categoryName,
    customerLink: customer.categoryLink,
    customerData: customer.categoryData
  };
};
