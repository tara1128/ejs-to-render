/*
  Script of Cheetah official website.
  Author: Alexandra
  Latest modified: 2018-01-10 15:53
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
    fxCls: 'fixed',
    stkCls: 'sticky',
    unfdCls: 'unfold',
    animCls: 'animated',
    scrollLimit: 380,
		init: function(pageObj) {
      var me = this;
      me._body.css('min-height', window.innerHeight);
      me.page = pageObj;
      me.DetectLanguage();
      me.DetectCurrentPage();
      me.AutoWidth();
      me.BindAllEvents();
      me.BindScrolling();
      console.log('2018, Jan.10th 15:53, make liveme icons fit for Retina !');
    },
    DetectLanguage: function() {
      var me = this;
      var curLang = me._body.attr('data-lang');
      if (curLang && curLang.length > 0) me.lang = curLang;
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

    /* Detect current page: */
    DetectCurrentPage: function() {
      var me = this;
      var cr = me._body.attr('data-subpage');
      if (typeof cr != 'undefined') me.curr = cr;
      if ( me.curr == 'index' ) {
        me.SwiperInit();
      } else {
        setTimeout(function(){me.DetectUrlHash();}, 150);
        me.AdjustLeftMenuPositions();
      }
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

    /* Reset first screen's height on mobiles to fit devices: */
    ResetFirstScreenHeight: function() {
      var me = this, pg = me.page;
      var devHeight = window.innerHeight;
      pg.firstScreen.height(devHeight);
      pg.mobileSwiper.height(devHeight);
    },

    /* Index first screen slider: */
    SwiperInit: function() {
      var me = this, pg = me.page;
      if (window.innerWidth > 768) { /* On PC */
        console.log('Swiper Init works! On PC!');
        if (pg.billboardSwiperCon.find('.swiper-slide').length < 2) return;
        new Swiper('.billboard-swiper-container', {
          paginationClickable:true,
          spaceBetween:0,
          centeredSlides:true,
          autoplay:0,
          autoplayDisableOnInteraction:false
        });
      } else { /* On mobiles */
        console.log('Swiper Init works! On Mobile!');
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

    /* Add animations to elements with class 'has-anim': */
    AddAnimateToElement: function(_top) {
      var me = this, pg = me.page;
      var elements = pg.animElements;
      jQuery.map(elements, function(ele, i){
        var _offsetTop = $(ele).offset().top;
        if (_top >= _offsetTop - 1000) {
          $(ele).addClass(me.animCls);
        }
      });
    },

    /* Adjust left menu's position for every time refreshing: */
    AdjustLeftMenuPositions: function() {
      var me = this, pg = me.page;
      var _sclTop = document.body.scrollTop || document.documentElement.scrollTop;
      for (var i = 0; i < pg.cateContainers.length; i++) {
        var item = $(pg.cateContainers[i]);
        var itemTop = item.offset().top;
        var itemId = '#' + item.attr('id');
        var targetA = $('a[href="'+ itemId +'"]');
        if (_sclTop <= itemTop) {
          pg.subPageMenu.find('a').removeClass('active');
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
      var me = this, pg = me.page, lastScrollTop = 0;
      me._win.scroll(function(){
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        me.AddAnimateToElement(scrollTop);
        if (scrollTop >= me.scrollLimit) {
          pg.topBar.addClass(me.fxCls);
        } else {
          pg.topBar.removeClass(me.fxCls);
        }
        /* Subpage left menu only displays on desktop: */
        if (window.innerWidth <= 768) return;
        if (scrollTop >= 54) {
          // pg.subPageMenu.addClass(me.fxCls).css('top', scrollTop + 54);
          pg.subPageMenu.addClass(me.fxCls);
        } else {
          pg.subPageMenu.removeClass(me.fxCls);
        }
        /* Highlight the current content's menu, on desktop only: */
        jQuery.map(pg.cateContainers, function(item, index){
          if ( $(item).offset().top < (scrollTop + 200) ) {
            var targetA = $('a[href="#'+ item.id +'"]');
            pg.subPageMenu.find('a').removeClass(me.clsn);
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
              $('a[href="#'+ pg.cateContainers[pg.cateContainers.length-3].id +'"]').removeClass(me.clsn);
              $('a[href="#'+ pg.cateContainers[pg.cateContainers.length-2].id +'"]').removeClass(me.clsn);
              $('a[href="#'+ pg.cateContainers[pg.cateContainers.length-1].id +'"]').addClass(me.clsn);
            }
          }
        }); // End map
        /* In sub pages, make left menu sticky when scrolling to the bottom: */
        if (me.curr != 'index') {
          var subPageCtBottomTop = pg.subPageCtBottom.offset().top - 3,
              subMenuAncHeadTop = pg.subPageMenuHead.offset().top,
              subMenuAncFootTop = pg.subPageMenuFoot.offset().top;
          if (subMenuAncFootTop >= subPageCtBottomTop) {
            pg.subPageMenu.addClass(me.stkCls);
          } 
          var _sumDis = scrollTop + pg.subPageMenu.height();
          if (scrollTop < lastScrollTop && _sumDis <= subMenuAncHeadTop) { // When scrolling up
            pg.subPageMenu.removeClass(me.stkCls);
          }
        }
        lastScrollTop = scrollTop;
      }); // End scroll
    },
    
    /* Adjust widths automatically in mobiles: */
    AutoWidth: function() {
      var me = this, pg = me.page;
      if (window.innerWidth > 768) return;
      for (var i = 0; i < pg.targetElement.length; i++) {
        var item = $(pg.targetElement[i]),
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
      var me = this, pg = me.page;
      /* Unfold burger nav on mobiles: */
      pg.topBurger.click(function(){
        if ( !pg.topNav.hasClass(me.unfdCls) ) {
          pg.topNav.addClass(me.unfdCls);
        } else {
          pg.topNav.removeClass(me.unfdCls);
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
      pg.footerLangsTrigger.click(function(e){
        var _p = pg.footerLangsContain;
        //e.stopPropagation();
        if (!_p.hasClass(me.clsn)) {
          _p.addClass(me.clsn);
          return false;
        } else {
          _p.removeClass(me.clsn);
        }
      });
      me._body.click(function(){
        var _p = pg.footerLangsContain;
        if (_p.hasClass(me.clsn)) _p.removeClass(me.clsn);
      });
      /* Hover game units to display descriptions: */
      if (me.curr == 'index') {
        pg.inxGameUnits.mouseenter(function(){
          $(this).find('.CMCM_GameIntros').addClass(me.clsn);
        });
        pg.inxGameUnits.mouseleave(function(){
          $(this).find('.CMCM_GameIntros').removeClass(me.clsn);
        });
      }
      /* Hover culture values: */
      if (me.curr == 'company') {
        pg.cultureValues.mouseenter(function(){
          var _i = $(this), token = _i.attr('data');
          var _descr = $('.vd-'+ token);
          pg.cultureValDescr.removeClass(me.clsn);
          _i.addClass(me.clsn);
          _descr.addClass(me.clsn);
        });
        pg.cultureValues.mouseleave(function(){
          $(this).removeClass(me.clsn);
          pg.cultureValDescr.removeClass(me.clsn);
        });
        /* On mobiles, click each icon of culture&value: */
        pg.valItemOnMobile.click(function(){
          var _i = $(this), token = _i.attr('data');
          var _descr = $('.vmd-'+ token);
          pg.valItemOnMobile.removeClass(me.clsn);
          pg.valItemDescrOnMobile.removeClass(me.clsn);
          if (!_i.hasClass(me.clsn)) {
            _i.addClass(me.clsn);
            _descr.addClass(me.clsn);
          }
        });
      }
      /* Click menus on the left of sub pages: */
      if (me.curr != 'index') {
        pg.subMenuItems.click(function(event){
          var _i = $(this), target = $(this.hash);
          var topValue = target.offset().top - 70;
          me.SmoothScrolling(target, topValue, event);
          pg.subMenuItems.removeClass(me.clsn);
          pg.subMenuSubAs.removeClass(me.clsn);
          _i.addClass(me.clsn);
          location.hash = this.hash;
          $(_i.parent().find('.CMCM_SMD_A')[0]).addClass(me.clsn);
        });
        /* Click submenus on the left of sub pages: */
        pg.subMenuSubAs.click(function(event){
          var _i = $(this), target = $(this.hash);
          var topValue = target.offset().top - 70;
          var myFth = _i.parent();
          var myMenu = myFth.parent().find('.CMCM_SubMenuItem');
          if ( !_i.hasClass(me.clsn) ) {
            me.SmoothScrolling(target, topValue, event);
            pg.subMenuItems.removeClass(me.clsn);
            pg.subMenuSubAs.removeClass(me.clsn);
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
    billboardSwiperCon: $('.billboard-swiper-container'),
    mobileSwiper: $('#CMCM_SwiperInMobile'),
    inxGameUnits: $('.CMCM_GameUnit'),
    inxGameIntros: $('.CMCM_GameIntros'),
    animElements: $('.has-anim'),
    targetElement: $('.CMCM_AutoWidth'),

    cateContainers: $('.CMCM_CategoryContainer'),
    subPageMenu: $('.CMCM_SubMenus'),
    subPageMenuHead: $('#CMCM_SubMenuHeadAnchor'),
    subPageMenuFoot: $('#CMCM_SubMenuBottomAnchor'),
    subPageCtBottom: $('#CMCM_SubPageContentBottom'),
    subMenuItems: $('.CMCM_SubMenuItem'),
    subMenuSubAs: $('.CMCM_SMD_A'),
    cultureValues: $('.CMCM_ValueItem'),
    valItemOnMobile: $('.CMCM_ValueItemOnMobile'),
    cultureValDescr: $('.CMCM_ValueDescr'),
    valItemDescrOnMobile: $('.CMCM_ValueDescrOnMobile'),

    footerLangsContain: $('#CMCM_ContainLangs'),
    footerLangsTrigger: $('#CMCM_FootLangsTrigger')
  };
  CMCMWebsite.init(realPage);
})(jQuery);
/* ============================================================== */
