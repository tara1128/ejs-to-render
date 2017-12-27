/*
  Script of Cheetah official website.
  Author: Alexandra
  Latest modified: 2017-12-27 12:28
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
      console.log('2017, Dec.27th 12:28');
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

    
    /* Render sub page, including left menu and main contents: */
    RenderSubPages: function() {
      var me = this, dataList = null;
      if (me.curr == 'company') {
        setTimeout(function(){me.DetectUrlHash();}, 150);
      } else if (me.curr == 'contact') {
        setTimeout(function(){me.DetectUrlHash();}, 150);
      } else if (me.curr == 'product') {
        setTimeout(function(){me.DetectUrlHash();}, 150);
      } else {
        return;
      }
      me.AdjustLeftMenuPositions();
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

    subPageMenu: $('.CMCM_SubMenus'),
    subPageMenuHead: $('#CMCM_SubMenuHeadAnchor'),
    subPageMenuFoot: $('#CMCM_SubMenuBottomAnchor'),
    subMenuItems: $('.CMCM_SubMenuItem'),
    subMenuSubAs: $('.CMCM_SMD_A'),

    companyContainer: $('#CMCM_CompanyContents'),
    cultureValues: $('.CMCM_ValueItem'),
    valItemOnMobile: $('.CMCM_ValueItemOnMobile'),
    cultureValDescr: $('.CMCM_ValueDescr'),
    valItemDescrOnMobile: $('.CMCM_ValueDescrOnMobile'),

    productContainer: $('#CMCM_ProductsContents'),
    footerContainer: $('#CMCM_Footer'),
    footerLangsContain: $('#CMCM_ContainLangs'),
    footerLangsTrigger: $('#CMCM_FootLangsTrigger'),
    subPageCtBottom: $('#CMCM_SubPageContentBottom')
  };
  CMCMWebsite.init(realPage);
})(jQuery);
/* ============================================================== */
