/*
  Script of Cheetah official website.
  Author: Alexandra
  Latest modified: 2017-12-26 15:25
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
      me.DetectLanguage();
      me.DetectCurrentPage();
      me.AutoWidth();
      me.BindAllEvents();
      me.BindScrolling();
      console.log('2017, Dec.26th 15:25, me.curr =', me.curr);
    },
    DetectLanguage: function() {
      var me = this;
      var curLang = me._body.attr('data-lang');
      if (curLang && curLang.length > 0) me.lang = curLang;
    },
    DetectCurrentPage: function() {
      var me = this;
      var cr = me._body.attr('data-subpage');
      if (typeof cr != 'undefined') me.curr = cr;
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
        setTimeout(function(){me.DetectUrlHash();}, 150);
      } else if (me.curr == 'contact') {
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
          menuContainer = $('#CMCM_SubPageMenu_' + me.curr);
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
            }
          }
          // if (_cateData.unfold) {_ifUnfold = me.clsn;}
        }
      } // End for-in
      menuContainer.append(anchorHead).append(_cateHtml).append(anchorBott);
      me.page.subMenuItems = $('.CMCM_SubMenuItem');
      me.page.subMenuSubAs = $('.CMCM_SMD_A');
      // me.page.subPageMenuHead = $('#CMCM_SubMenuHeadAnchor');
      me.page.subPageMenuFoot = $('#CMCM_SubMenuBottomAnchor');
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

    subPageMenuHead: $('#CMCM_SubMenuHeadAnchor'),
    companyContainer: $('#CMCM_CompanyContents'),
    cultureValues: $('.CMCM_ValueItem'),
    valItemOnMobile: $('.CMCM_ValueItemOnMobile'),
    cultureValDescr: $('.CMCM_ValueDescr'),
    valItemDescrOnMobile: $('.CMCM_ValueDescrOnMobile'),

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
