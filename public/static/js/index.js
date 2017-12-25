/*
  Script of Cheetah official website.
  Author: Alexandra
  Latest modified: 2017-12-25 17:23
*/

(function(win, doc, $) {
	var CMCMWebsite = {
    _win: $(win) || $(window),
		_doc: $(doc) || $(document),
    _body: $('body'),
    page: null,
    lang: 'en-us',
    curr: 'index',
    clsn: 'active',
		init: function(pageObj) {
      var me = this;
      me._body.css('min-height', window.innerHeight);
      me.page = pageObj;
      // me.RenderSubPages();
      me.AutoWidth();
      me.BindAllEvents();
      me.BindScrolling();
      console.log('2017, Dec.25th 17:23, update cmpr@cmcm.com');
    },


    /* Global function, output paragraph by paragraph from an array: */
    ArrayOutput: function(array, htmlTag, htmlCloseTag) {
      if (array.length < 1 || !array) return;
      var result = '';
      if (!htmlTag) htmlTag = '<span>';
      if (!htmlCloseTag) htmlCloseTag = '</span>';
      jQuery.map(array, function(text){
        result += (htmlTag + text + htmlCloseTag);
      });
      return result;
    },

    /* Global function, for smooth scrolling: */
    SmoothScrolling: function(target, topValue, e) {
      if (target.length) {
        if (e) {e.preventDefault ? e.preventDefault() : (e.returnValue = false);}
        $('html, body').animate({
          scrollTop:topValue
        }, 450, function() { //Callback, must change focus!
          $(target).focus();
        });
      }
    },

    /* Detect URL hash for a specific part of the page: */
    DetectUrlHash: function() {
      var me = this, target = $(location.hash);
      if ( !(target.offset()) ) return;
      if (location.hash && target.offset().top) {
        var topValue = target.offset().top - 70;
        me.SmoothScrolling(target, topValue);
      }
    },

    /* Reset first screen's height on mobiles to fit devices: */
    ResetFirstScreenHeight: function() {
      var me = this;
      var devHeight = window.innerHeight;
      me.page.firstScreen.height(devHeight);
      me.page.mobileSwiper.height(devHeight);
    },
    

    /* Index first screen slider: */
    SwiperInit: function() {
      var me = this;
      if (window.innerWidth > 768) { /* On PC */
        if ($('.billboard-swiper-container').find('.swiper-slide').length < 2) return;
        new Swiper('.billboard-swiper-container', {
          paginationClickable:true,
          spaceBetween:0,
          centeredSlides:true,
          autoplay:0,
          autoplayDisableOnInteraction:false
        });
      } else { /* On mobiles */
        me.ResetFirstScreenHeight();
        if (navigator.userAgent.indexOf('MSIE 8') > -1) return; /* For damn IE8 */
        new Swiper('.billboard-swiper-for-mobile', {
          paginationClickable:true,
          spaceBetween:0,
          centeredSlides:true,
          autoplay:3000,
          effect:'fade',
          autoplayDisableOnInteraction:false
        });
      }
    },

    
    /* Render index page, including slogan, intros, ai, tool, liveme, games, nr: */
    RenderIndexPage: function() {
      var me = this;
      me.SwiperInit();
    },

    /* Render sub page, including left menu and main contents: */
    RenderSubPages: function() {
      var me = this, dataList = null;
      if (me.curr == 'company') {
        dataList = me.companyInfoList;
        me.RenderCompanyMission(dataList);
        me.RenderCompanyIntros(dataList);
        me.RenderCompanyHistory(dataList);
        me.RenderCompanyLeaders(dataList);
        me.RenderCompanyCulture(dataList);
        me.RenderCompanyWelfare(dataList);
        setTimeout(function(){me.DetectUrlHash();}, 150);
      } else if (me.curr == 'contact') {
        dataList = me.contactList;
        me.RenderContactInfosToContactPage(dataList);
        setTimeout(function(){me.DetectUrlHash();}, 150);
      } else if (me.curr == 'product') {
        dataList = me.productList;
        me.RenderAllProductsToProductPage(dataList);
        setTimeout(function(){me.DetectUrlHash();}, 150);
      } else {
        return;
      }
      me.RenderSubPageMenu(dataList);
      me.AdjustLeftMenuPositions();
    },

    /* Render left menu in sub pages: */
    RenderSubPageMenu: function(dataList) {
      var me = this;
      var menuItems = dataList.category,
          menuContainer = $('#CMCM_SubPageMenu_' + me.curr),
          anchorHead = '<b id="CMCM_SubMenuHeadAnchor"></b>',
          anchorBott = '<b id="CMCM_SubMenuBottomAnchor"></b>';
          _cateHtml = '';
      for (var item in menuItems) {
        var _cateName = menuItems[item].categoryName,
            _cateHref = menuItems[item].categoryLink,
            _cateData = menuItems[item].categoryData,
            _subHtml = '',
            _ifUnfold = '';
        if (_cateData.onMenu) { /* If sub-menus displayed beneath this menu */
          for (var __subCate in _cateData) {
            if (_cateData[__subCate].name) {
              var __name = _cateData[__subCate].name,
                  __hash = _cateData[__subCate].hash;
              _subHtml += '<a class="category-detail-one has-trans CMCM_SMD_A " href="#'+ __hash +'">'+ __name +'</a>';
            }
          }
          // if (_cateData.unfold) {_ifUnfold = me.clsn;}
          _subHtml = ('<div class="category-details CMCM_SubMenuDetails '+ _ifUnfold +'">' + _subHtml + '</div><!-- details -->');
        }
        _cateHtml += '<div class="category-unit">\
                        <a class="category-name has-trans CMCM_SubMenuItem '+ _ifUnfold +'" href="#'+ _cateHref +'">'+ _cateName +'</a>\
                        '+ _subHtml +'\
                      </div><!-- category unit -->';
      } // End for-in
      menuContainer.append(anchorHead).append(_cateHtml).append(anchorBott);
      me.page.subMenuItems = $('.CMCM_SubMenuItem');
      me.page.subMenuSubAs = $('.CMCM_SMD_A');
      me.page.subPageMenuHead = $('#CMCM_SubMenuHeadAnchor');
      me.page.subPageMenuFoot = $('#CMCM_SubMenuBottomAnchor');
    },
    
    /* Render company mission & vision: */
    RenderCompanyMission: function(comInfoList) {
      var me = this;
      var mission = comInfoList.category.missionVisions;
      var _name = mission.categoryName,
          _hash = mission.categoryLink,
          _data = mission.categoryData,
          _csan = _data.classAnchor,
          _slog = _data.slogan,
          _desc = _data.descrp,
          _html = '<div class="category-container CMCM_CategoryContainer '+ _csan +'" id="'+ _hash +'">\
                    <h2 class="category-title">'+ _name +'</h2>\
                    <div class="one-app-introduction clearfix">\
                      <h1 class="cmcm-slogan">'+ _slog +'</h1>\
                      <p class="under-slogan">'+ _desc +'</p>\
                    </div><!-- one app introduction -->\
                   </div><!-- category container of mission and visions -->';
      me.page.companyContainer.append(_html);
    },
    
    /* Render company introductions: */
    RenderCompanyIntros: function(comInfoList) {
      var me = this;
      var intro = comInfoList.category.introduction;
      var _name = intro.categoryName,
          _hash = intro.categoryLink,
          _data = intro.categoryData,
          _csan = _data.classAnchor,
          _arry = _data.introTexts,
          _imge = _data.introImage,
          _text = me.ArrayOutput(_arry, '<p class="company-intros">', '</p>'),
          _html = '<div class="category-container CMCM_CategoryContainer '+ _csan +'" id="'+ _hash +'">\
                     <h2 class="category-title">'+ _name +'</h2>\
                     <div class="one-app-introduction clearfix">\
                       <img class="company-view" src="'+ _imge +'" alt="'+ _name +'" />\
                       '+ _text +'</div><!-- one app introduction -->\
                   </div><!-- category container of company intro -->';
      me.page.companyContainer.append(_html);
    },
    
    /* Render company history: */
    RenderCompanyHistory: function(comInfoList) {
      var me = this;
      var devHistory = comInfoList.category.devHistory;
      var _name = devHistory.categoryName,
          _hash = devHistory.categoryLink,
          _data = devHistory.categoryData,
          _csan = _data.classAnchor,
          _historyArray = _data.companyHistory,
          allHistories = '';
      jQuery.map(_historyArray, function(oneYearEvents){
        var _year = oneYearEvents.year;
        var _events = oneYearEvents.events;
        var _evtHtm = '';
        for (var month in _events) {
          _evtHtm += '<div class="history-item clearfix">\
                        <span class="font-book">'+ month +'</span><b>'+ _events[month] +'</b>\
                      </div><!-- item -->';
        } // End for-in
        allHistories += '<div class="history-one-year clearfix">\
                            <h3 class="year-number font-book">'+ _year +'</h3>'+ _evtHtm +'<s>Dots</s>\
                         </div><!-- history-one-year -->';
      }); // End map
      var _html = '<div class="category-container CMCM_CategoryContainer '+ _csan +'" id="'+ _hash +'">\
                     <h2 class="category-title">'+ _name +'</h2>\
                     <div class="one-app-introduction clearfix">'+ allHistories +'</div>\
                   </div><!-- category container of history -->';
      me.page.companyContainer.append(_html);
    },
    
    /* Render company executives: */
    RenderCompanyLeaders: function(comInfoList) {
      var me = this;
      var leaders = comInfoList.category.leaderTeam;
      var _name = leaders.categoryName,
          _hash = leaders.categoryLink,
          _data = leaders.categoryData,
          _csan = _data.classAnchor,
          _detl = _data.leaderDetails,
          _allLeaders = '';
      jQuery.map(_detl, function(leader, i){
        var _leaderName = leader.name,
            _leaderTitle = leader.title,
            _leaderIntro = me.ArrayOutput(leader.detail, '<p>', '</p>'),
            _leaderAvatar = leader.avatar,
            _isReverse = (i % 2 > 0) ? 'reverse' : '';
        _allLeaders += '<div class="one-app-introduction clearfix '+ _isReverse +'">\
                          <div class="leader-pic">\
                            <img src="'+ _leaderAvatar +'" alt="'+ _leaderName +'" />\
                            <div class="leader-inf-in-mobile-only">\
                              <h2>'+ _leaderName +'</h2><h3>'+ _leaderTitle +'</h3>\
                            </div>\
                          </div>\
                          <div class="leader-inf">\
                            <h2>'+ _leaderName +'</h2><h3>'+ _leaderTitle +'</h3>'+ _leaderIntro +'\
                          </div>\
                        </div><!-- one app introduction -->';
      }); // End map
      var _html = '<div class="category-container CMCM_CategoryContainer '+ _csan +'" id="'+ _hash +'">\
                      <h2 class="category-title">'+ _name +'</h2>'+ _allLeaders +'\
                   </div><!-- category container of executive team -->';
      me.page.companyContainer.append(_html);
    },

    /* Render company culture & values: */
    RenderCompanyCulture: function(comInfoList) {
      var me = this;
      var culture = comInfoList.category.corCulture;
      var _name = culture.categoryName,
          _hash = culture.categoryLink,
          _data = culture.categoryData,
          _csan = _data.classAnchor,
          _cult = _data.cultureValues,
          _vHtm = '',
          _vDes = '',
          _firstThreeCute = '',
          _firstThreeDescr = '',
          _lastTwoCute = '',
          _lastTwoDescr = '';
      jQuery.map(_cult, function(value, i){
        var _clsn = value.valueClassName,
            _icon = value.valueIcon,
            _text = value.valueText,
            _cute = value.valueCute,
            _desc = value.valueDesc;
        _vHtm += '<li class="value-item '+ _clsn +' has-trans CMCM_ValueItem" data="'+ _clsn +'">\
                    <div class="value-icon">\
                      <img class="has-trans" src="'+ _icon +'" alt="'+ _text +'" />\
                    </div>\
                    <img class="value-cute has-trans" src="'+ _cute +'" alt="'+ _text +'" />\
                    <span class="value-text has-trans">'+ _text +'</span>\
                    <s class="dot1 has-trans"></s><s class="dot2 has-trans"></s><s class="dot3 has-trans"></s>\
                  </li><!-- one value item -->';
        _vDes += '<li class="value-descr has-trans CMCM_ValueDescr vd-'+ _clsn +'">\
                    <span>'+ _desc +'</span>\
                  </li>';
        if (i < 3) { /* First three items render on the first row, for mobile: */
          _firstThreeCute += '<div class="val-mob-item '+ _clsn +' has-trans CMCM_ValueItemOnMobile" data="'+ _clsn +'">\
                                <img class="vmob-icon has-trans" src="'+ _icon +'" alt="'+ _text +'" />\
                                <img class="vmob-cute has-trans" src="'+ _cute +'" alt="'+ _text +'" />\
                                <span class="vmob-txt has-trans">'+ _text +'</span>\
                                <s class="dot1 has-trans"></s><s class="dot2 has-trans"></s><s class="dot3 has-trans"></s>\
                              </div><!-- val-mob-item -->';
          _firstThreeDescr += '<div class="vmob-descr has-trans CMCM_ValueDescrOnMobile vmd-'+ _clsn +'">'+ _desc +'</div>';
        } else {/* Last two items render on the second row, for mobile: */
          _lastTwoCute += '<div class="val-mob-item '+ _clsn +' has-trans CMCM_ValueItemOnMobile" data="'+ _clsn +'">\
                                <img class="vmob-icon has-trans" src="'+ _icon +'" alt="'+ _text +'" />\
                                <img class="vmob-cute has-trans" src="'+ _cute +'" alt="'+ _text +'" />\
                                <span class="vmob-txt has-trans">'+ _text +'</span>\
                                <s class="dot1 has-trans"></s><s class="dot2 has-trans"></s><s class="dot3 has-trans"></s>\
                              </div><!-- val-mob-item -->';
          _lastTwoDescr += '<div class="vmob-descr has-trans CMCM_ValueDescrOnMobile vmd-'+ _clsn +'">'+ _desc +'</div>';
        }
      }); // End map
      var _html = '<div class="category-container CMCM_CategoryContainer '+ _csan +'" id="'+ _hash +'">\
                    <h2 class="category-title">'+ _name +'</h2>\
                    <div class="one-app-introduction clearfix">\
                      <div class="values-container rel">\
                        <ul class="values-display-on-pc clearfix">'+ _vHtm +'</ul>\
                        <ul class="values-descrs-on-pc">'+ _vDes +'</ul>\
                        <div class="values-on-mobile">\
                          <div class="val-on-mob-row1 clearfix">'+ _firstThreeCute +'</div><!-- row1 -->\
                          <div class="val-on-mob-descr1 clearfix">'+ _firstThreeDescr +'</div><!-- descr1 -->\
                          <div class="val-on-mob-row2 clearfix">'+ _lastTwoCute +'</div><!-- row2 -->\
                          <div class="val-on-mob-descr2 clearfix">'+ _lastTwoDescr +'</div><!-- descr2 -->\
                        </div>\
                      </div>\
                    </div>\
                  </div><!-- category container of culture -->';
      me.page.companyContainer.append(_html);
      me.page.cultureValues = $('.CMCM_ValueItem');
      me.page.cultureValDescr = $('.CMCM_ValueDescr');
      me.page.valItemOnMobile = $('.CMCM_ValueItemOnMobile');
      me.page.valItemDescrOnMobile = $('.CMCM_ValueDescrOnMobile');
    },
    
    /* Render company employers benefits: */
    RenderCompanyWelfare: function(comInfoList) {
      var me = this;
      var welfare = comInfoList.category.empWelfare;
      var _name = welfare.categoryName,
          _hash = welfare.categoryLink,
          _data = welfare.categoryData,
          _csan = _data.classAnchor,
          _arry = _data.welfareIntros,
          _imgs = _data.welfareImages,
          _text = me.ArrayOutput(_arry, '<p class="welfare-para">', '</p>'),
          _pics = '';
      jQuery.map(_imgs, function(item, i){
        var _src = item.image,
            _des = item.descr,
            _lay = '';
        if (i%2 > 0) _lay = 'right';
        _pics += '<div class="welfare-item '+ _lay +'">\
                    <img src="'+ _src +'" alt="'+ _des +'" /><p>'+ _des +'</p>\
                  </div>';
      }); // End map
      var _html = '<div class="category-container CMCM_CategoryContainer '+ _csan +'" id="'+ _hash +'">\
                    <h2 class="category-title">'+ _name +'</h2>\
                    <div class="one-app-introduction clearfix">\
                      '+ _text +'<div class="welfare-imgs clearfix">'+ _pics +'</div>\
                    </div><!-- one app introduction -->\
                   </div><!-- category container of welfare -->';
      me.page.companyContainer.append(_html);
    },
    
    /* Render all products to product list page: */
    RenderAllProductsToProductPage: function(proList) {
      var me = this, _html ='';
      var categories = proList.category;
      for (var cate in categories) { // Traverse big category like 'mobileApps'
        var _oneCate = categories[cate],
            // _cateName = _oneCate.categoryName,
            // _cateHash = _oneCate.categoryLink,
            _cateData = _oneCate.categoryData;
        for (var sub in _cateData) { // Sub category like 'tool' or 'news'
          var _oneSubCate = _cateData[sub];
          if (_oneSubCate.name) {
            var _name = _oneSubCate.name,
                _hash = _oneSubCate.hash,
                _csan = _oneSubCate.anch,
                _apps = _oneSubCate.data,
                _allAppsInThisSubCate = '';
            jQuery.map(_apps, function(app, i){
              var _appName = app.name,
                  _appIcon = app.icon,
                  _appdescForProd = me.ArrayOutput(app.descForProd, '<p>', '</p>'),
                  _appLink = app.link,
                  _appTarget = app.target,
                  _ifHide = '';
              if (!_appdescForProd) _ifHide = 'hide';
              _allAppsInThisSubCate += '<div class="one-app-introduction clearfix '+ _ifHide +'">\
                                          <div class="sub-appicon">\
                                            <a class="sub-prod-icon-a has-trans" href="'+ _appLink +'" target="'+ _appTarget +'">\
                                              <img src="'+ _appIcon +'" alt="'+ _appName +'" />\
                                            </a>\
                                          </div>\
                                          <div class="sub-appinfo">\
                                            <h3 class="clearfix">\
                                              <a class="has-trans" href="'+ _appLink +'" target="'+ _appTarget +'">'+ _appName +'</a>\
                                            </h3>\
                                            '+ _appdescForProd +'\
                                          </div><!-- appinfo -->\
                                        </div><!-- one app introduction -->';
            }); // End map
            /* NOTE: One unit area in page is based on one sub cate, not big cate. */
            _html += '<div class="category-container CMCM_CategoryContainer '+ _csan +'" id="'+ _hash +'">\
                        <h2 class="category-title">'+ _name +'</h2>\
                        '+ _allAppsInThisSubCate +'\
                      </div><!-- end of category container -->';
          } // End if
        } // End traverse of sub category
      } // End for-in traverse
      me.page.productContainer.html(_html);
    },
    
    /* Render contact infos on contact page: */
    RenderContactInfosToContactPage: function(contactList) {
      var me = this, _html ='';
      var categories = contactList.category;
      for (var cate in categories) {
        var _oneCate = categories[cate],
            _name = _oneCate.categoryName,
            _hash = _oneCate.categoryLink,
            _data = _oneCate.categoryData,
            _csan = _data.classAnchor,
            _details = '';
        if (_hash == 'Contact_Social') {/* Render this category specifically */
          _details = '<div class="contact-info socl-media clearfix">\
                        <div class="socl-media-left">\
                          <h3 class="socl-media-tlt">'+ _data.wechatTitle +'</h3>\
                          <img src="'+ _data.wechat2dUrl +'" alt="'+ _data.wechatTitle +'" />\
                        </div>\
                        <div class="socl-media-right">\
                          <h3 class="socl-media-tlt">'+ _data.othersTitle +'</h3>\
                          <div class="socl-media-group">\
                            <a class="socl-media-item has-trans '+ _data.facebook.clsName +'" href="'+ _data.facebook.siteUrl +'" target="_blank">'+ _data.facebook.descTxt +'</a>\
                            <a class="socl-media-item has-trans '+ _data.twitter.clsName +'" href="'+ _data.twitter.siteUrl +'" target="_blank">'+ _data.twitter.descTxt +'</a>\
                            <a class="socl-media-item has-trans '+ _data.weibo.clsName +'" href="'+ _data.weibo.siteUrl +'" target="_blank">'+ _data.weibo.descTxt +'</a>\
                            <a class="socl-media-item has-trans '+ _data.linkedin.clsName +'" href="'+ _data.linkedin.siteUrl +'" target="_blank">'+ _data.linkedin.descTxt +'</a>\
                          </div>\
                        </div>\
                      </div><!-- contact info -->';
        } else {
          if (_hash == 'Contact_GlobalOffice') {/* Insert a map image for global offices: */
            var _globalLocations = '', _globalLocNum = 14;
            for (var g = 0; g < _globalLocNum; g++) {
              _globalLocations += '<s class="global-loc has-trans has-anim loc-'+ g +'"></s>';
            }
            _details = '<div class="contact-info global-map">\
                          <img src="/dist/images/global-offices.png" alt="Global Offices" />\
                          '+ _globalLocations +'\
                        </div><!-- contact info, global map -->';
          } // End if
          jQuery.map(_data.datas, function(detail, i){
            var _detailTitle = detail.title,
                _detailTexts = me.ArrayOutput(detail.details, '<p>', '</p>');
            _details += '<div class="contact-info"><p class="cont-top-para">'+ _detailTitle +'</p>'+ _detailTexts +'</div><!-- contact info -->';
          });
        }
        _html += '<div class="category-container CMCM_CategoryContainer '+ _csan +'" id="'+ _hash +'">\
                    <h2 class="category-title">'+ _name +'</h2>\
                    <div class="one-app-introduction clearfix">'+ _details +'</div>\
                  </div><!-- category container -->';
      }
      me.page.contactContainer.html(_html);
    },
    

    /* Add animations to elements with class 'has-anim': */
    AddAnimateToElement: function(_top) {
      var elements = $('.has-anim');
      var animCls = 'animated';
      jQuery.map(elements, function(ele, i){
        var _offsetTop = $(ele).offset().top;
        if (_top >= _offsetTop - 1000) {
          $(ele).addClass(animCls);
        }
      });
    },

    /* Adjust left menu's position for every time refreshing: */
    AdjustLeftMenuPositions: function() {
      var me = this,
          cateContainers = $('.CMCM_CategoryContainer'),
          _sclTop = document.body.scrollTop || document.documentElement.scrollTop;
      for (var i = 0; i < cateContainers.length; i++) {
        var item = $(cateContainers[i]);
        var itemTop = item.offset().top;
        var itemId = '#' + item.attr('id');
        var targetA = $('a[href="'+ itemId +'"]');
        if (_sclTop <= itemTop) {
          me.page.subPageMenu.find('a').removeClass('active');
          targetA.addClass('active');
          $('html, body').animate({
            scrollTop: (_sclTop <= 100) ? (_sclTop) : (itemTop - 50)
          }, 800);
          break;
        }
      };// End for
    },

    /* Scrolling event: */
    BindScrolling: function() {
      var me = this,
          cateContainers = $('.CMCM_CategoryContainer'),
          scrollLimit = 380,
          lastScrollTop = 0;
      me._win.scroll(function(){
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        me.AddAnimateToElement(scrollTop);
        if (scrollTop >= scrollLimit) {
          me.page.topBar.addClass('fixed');
        } else {
          me.page.topBar.removeClass('fixed');
        }
        /* Subpage left menu only displays on desktop: */
        if (window.innerWidth <= 768) return;
        if (scrollTop >= 54) {
          // me.page.subPageMenu.addClass('fixed').css('top', scrollTop + 54);
          me.page.subPageMenu.addClass('fixed');
        } else {
          me.page.subPageMenu.removeClass('fixed');
        }
        /* Highlight the current content's menu, on desktop only: */
        jQuery.map(cateContainers, function(item, index){
          if ( $(item).offset().top < (scrollTop + 200) ) {
            var targetA = $('a[href="#'+ item.id +'"]');
            me.page.subPageMenu.find('a').removeClass(me.clsn);
            targetA.addClass(me.clsn);
            if (targetA.hasClass('CMCM_SMD_A')) {
              targetA.parent().parent().find('.CMCM_SubMenuItem').addClass(me.clsn);
            }
          } else if (scrollTop < 100) {
            $('a[href="#'+ item.id +'"]').removeClass(me.clsn);
            if (index == 0) $('a[href="#'+ item.id +'"]').addClass(me.clsn);
          } else {
            $('a[href="#'+ item.id +'"]').removeClass(me.clsn);
            /* For tall screens, highlight the last menu when scrolling to the bottom: */
            if (me._win.height() + scrollTop >= document.body.scrollHeight - 100) {
              $('a[href="#'+ cateContainers[cateContainers.length-3].id +'"]').removeClass(me.clsn);
              $('a[href="#'+ cateContainers[cateContainers.length-2].id +'"]').removeClass(me.clsn);
              $('a[href="#'+ cateContainers[cateContainers.length-1].id +'"]').addClass(me.clsn);
            }
          }
        }); // End map
        /* In sub pages, make left menu sticky when scrolling to the bottom: */
        if (me.curr != 'index') {
          var subPageCtBottomTop = me.page.subPageCtBottom.offset().top - 3,
              subMenuAncHeadTop = me.page.subPageMenuHead.offset().top,
              subMenuAncFootTop = me.page.subPageMenuFoot.offset().top;
          if (subMenuAncFootTop >= subPageCtBottomTop) {
            me.page.subPageMenu.addClass('sticky');
          } 
          var _sumDis = scrollTop + me.page.subPageMenu.height();
          if (scrollTop < lastScrollTop && _sumDis <= subMenuAncHeadTop) { // When scrolling up
            me.page.subPageMenu.removeClass('sticky');
          }
        }
        lastScrollTop = scrollTop;
      }); // End scroll
    },
    
    /* Adjust widths automatically in mobiles: */
    AutoWidth: function() {
      if (window.innerWidth > 768) return;
      var targetElement = $('.CMCM_AutoWidth');
      for (var i = 0; i < targetElement.length; i++) {
        var item = $(targetElement[i]),
            targetParents = item.parent(),
            targetSibling = targetParents.find('.CMCM_AutoWidthSibling'),
            parentWidth = targetParents.width(),
            siblingWidth = targetSibling.width(),
            paddings = item.attr('data-padding');
        if (!paddings) paddings = 0;
        var finalWidth = parentWidth - siblingWidth - paddings;
        item.width(finalWidth);
      }
    },

    /* After renderings, bind events to elements: */
    BindAllEvents: function() {
      var me = this;
      /* Unfold burger nav on mobiles: */
      me.page.topBurger.click(function(){
        var cls = 'unfold';
        if ( !me.page.topNav.hasClass(cls) ) {
          me.page.topNav.addClass(cls);
        } else {
          me.page.topNav.removeClass(cls);
        }
      });
      /* Click game units on mobiles: */
      if (window.innerWidth <= 768) {/* Only popping area as hotzone for mobile */
        pg.inxGameIntros.click(function(){
          var _url = $(this).attr('data-href');
          window.open(_url, '_blank');
        });
      };
      /* Click to switch langs on footer area: */
      me.page.footerLangsTrigger.click(function(e){
        var _p = me.page.footerLangsContain;
        //e.stopPropagation();
        if (!_p.hasClass(me.clsn)) {
          _p.addClass(me.clsn);
          return false;
        } else {
          _p.removeClass(me.clsn);
        }
      });
      me._body.click(function(){
        var _p = me.page.footerLangsContain;
        if (_p.hasClass(me.clsn)) _p.removeClass(me.clsn);
      });
      /* Hover game units to display descriptions: */
      if (me.curr == 'index') {
        me.page.inxGameUnits.mouseenter(function(){
          $(this).find('.CMCM_GameIntros').addClass(me.clsn);
        });
        me.page.inxGameUnits.mouseleave(function(){
          $(this).find('.CMCM_GameIntros').removeClass(me.clsn);
        });
      }
      /* Hover culture values: */
      if (me.curr == 'company') {
        me.page.cultureValues.mouseenter(function(){
          var _i = $(this), token = _i.attr('data');
          var _descr = $('.vd-'+ token);
          me.page.cultureValDescr.removeClass(me.clsn);
          _i.addClass(me.clsn);
          _descr.addClass(me.clsn);
        });
        me.page.cultureValues.mouseleave(function(){
          $(this).removeClass(me.clsn);
          me.page.cultureValDescr.removeClass(me.clsn);
        });
        /* On mobiles, click each icon of culture&value: */
        me.page.valItemOnMobile.click(function(){
          var _i = $(this), token = _i.attr('data');
          var _descr = $('.vmd-'+ token);
          me.page.valItemOnMobile.removeClass(me.clsn);
          me.page.valItemDescrOnMobile.removeClass(me.clsn);
          if (!_i.hasClass(me.clsn)) {
            _i.addClass(me.clsn);
            _descr.addClass(me.clsn);
          }
        });
      }
      /* Click menus on the left of sub pages: */
      if (me.curr != 'index') {
        me.page.subMenuItems.click(function(event){
          var _i = $(this), target = $(this.hash);
          var topValue = target.offset().top - 70;
          me.SmoothScrolling(target, topValue, event);
          me.page.subMenuItems.removeClass(me.clsn);
          me.page.subMenuSubAs.removeClass(me.clsn);
          _i.addClass(me.clsn);
          location.hash = this.hash;
          $(_i.parent().find('.CMCM_SMD_A')[0]).addClass(me.clsn);
        });
        /* Click submenus on the left of sub pages: */
        me.page.subMenuSubAs.click(function(event){
          var _i = $(this), target = $(this.hash);
          var topValue = target.offset().top - 70;
          var myFth = _i.parent();
          var myMenu = myFth.parent().find('.CMCM_SubMenuItem');
          if ( !_i.hasClass(me.clsn) ) {
            me.SmoothScrolling(target, topValue, event);
            me.page.subMenuItems.removeClass(me.clsn);
            me.page.subMenuSubAs.removeClass(me.clsn);
            myMenu.addClass(me.clsn);
            _i.addClass(me.clsn);
            location.hash = this.hash;
          }
        });
      }
    }

  };
	win.CMCMWebsite = CMCMWebsite;
})(window, document, jQuery);
/* Make things work: */
(function($) {
  var realPage = {
    firstScreen: $('#CMCM_FirstScreen'),
    topBar: $('#CMCM_TopBar'),
    topNav: $('#CMCM_TopNav'),
    topBurger: $('#CMCM_TopBurger'),
    mobileSwiper: $('#CMCM_SwiperInMobile'),
    inxGameUnits: $('.CMCM_GameUnit'),
    inxGameIntros: $('.CMCM_GameIntros'),
    subPageContent: $('.CMCM_SubpageContent'),
    companyContainer: $('#CMCM_CompanyContents'),
    productContainer: $('#CMCM_ProductsContents'),
    contactContainer: $('#CMCM_ContactContents'),
    subPageMenu: $('.CMCM_SubMenus'),
    footerContainer: $('#CMCM_Footer'),
    footerLangsContain: $('#CMCM_ContainLangs'),
    footerLangsTrigger: $('#CMCM_FootLangsTrigger'),
    subPageCtBottom: $('#CMCM_SubPageContentBottom')
  };
  CMCMWebsite.init(realPage);
})(jQuery);
/* ============================================================== */
