/*=========================================================================================
  File Name: app.js
  Description: Template related app JS.
==========================================================================================*/

(function (window, document, $) {
  'use strict';
  var $html = $('html');
  var $body = $('body');


  $(window).on('load', function () {
    var rtl;
    var compactMenu = false; // Set it to true, if you want default menu to be compact

    if ($body.hasClass("menu-collapsed")) {
      compactMenu = true;
    }

    if ($('html').data('textdirection') == 'rtl') {
      rtl = true;
    }

    setTimeout(function () {
      $html.removeClass('loading').addClass('loaded');
    }, 1200);

    $.app.menu.init(compactMenu);

    // Navigation configurations
    var config = {
      speed: 300 // set speed to expand / collpase menu
    };
    if ($.app.nav.initialized === false) {
      $.app.nav.init(config);
    }

    Unison.on('change', function (bp) {
      $.app.menu.change();
    });

    //Match content & menu height for content menu
    setTimeout(function () {
      if ($('body').hasClass('vertical-content-menu')) {
        setContentMenuHeight();
      }
    }, 500);

    function setContentMenuHeight() {
      var menuHeight = $('.main-menu').height();
      var bodyHeight = $('.content-body').height();
      if (bodyHeight < menuHeight) {
        $('.content-body').css('height', menuHeight);
      }
    }


    // Toggle fullscreen
    $('a[data-action="expand"]').on('click', function (e) {
      e.preventDefault();
      $(this).closest('.card').find('[data-action="expand"] i').toggleClass('ft-maximize ft-minimize');
      $(this).closest('.card').toggleClass('card-fullscreen');
    });


    // Add class on hover of the list
    $(document).on("mouseenter", ".search-list li", function (e) {
      $(this)
        .siblings()
        .removeClass("current_item")
      $(this).addClass("current_item")
    })
    $(document).on("click", ".search-list li", function (e) {
      e.stopPropagation()
    })
  });

  // Hide overlay menu on content overlay click on small screens
  $(document).on('click', '.sidenav-overlay', function (e) {
    // Hide menu
    $.app.menu.hide();
    return false;
  });



  $(document).on('click', '.menu-toggle, .modern-nav-toggle', function (e) {
    e.preventDefault();

    // Hide dropdown of user profile section for material templates
    if ($('.user-profile .user-info .dropdown').hasClass('show')) {
      $('.user-profile .user-info .dropdown').removeClass('show');
      $('.user-profile .user-info .dropdown .dropdown-menu').removeClass('show');
    }

    // Toggle menu
    $.app.menu.toggle();

    setTimeout(function () {
      $(window).trigger("resize");
    }, 200);

    if ($('#collapsed-sidebar').length > 0) {
      setTimeout(function () {
        if ($body.hasClass('menu-expanded') || $body.hasClass('menu-open')) {
          $('#collapsed-sidebar').prop('checked', false);
        } else {
          $('#collapsed-sidebar').prop('checked', true);
        }
      }, 1000);
    }

    // Hides dropdown on click of menu toggle
    // $('[data-toggle="dropdown"]').dropdown('hide');

    // Hides collapse dropdown on click of menu toggle
    if ($('.vertical-overlay-menu .navbar-with-menu .navbar-container .navbar-collapse').hasClass('show')) {
      $('.vertical-overlay-menu .navbar-with-menu .navbar-container .navbar-collapse').removeClass('show');
    }

    return false;
  });

  $(document).on('click', '.open-navbar-container', function (e) {
    var currentBreakpoint = Unison.fetch.now();
  });

  // Add Children Class
  $('.navigation').find('li').has('ul').addClass('has-sub');

  $('.carousel').carousel({
    interval: 2000
  });

  // Page full screen
  $('.nav-link-expand').on('click', function (e) {
    if (typeof screenfull != 'undefined') {
      if (screenfull.isEnabled) {
        screenfull.toggle();
      }
    }
  });
  if (typeof screenfull != 'undefined') {
    if (screenfull.isEnabled) {
      $(document).on(screenfull.raw.fullscreenchange, function () {
        if (screenfull.isFullscreen) {
          $('.nav-link-expand').find('i').toggleClass('ft-minimize ft-maximize');
        } else {
          $('.nav-link-expand').find('i').toggleClass('ft-maximize ft-minimize');
        }
      });
    }
  }


})(window, document, jQuery);


// grid
function resizeGridItem(item){
  grid = document.getElementsByClassName("grid")[0];
  rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
  rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
    item.style.gridRowEnd = "span "+rowSpan;
}

function resizeAllGridItems(){
  allItems = document.getElementsByClassName("item");
  for(x=0;x<allItems.length;x++){
    resizeGridItem(allItems[x]);
  }
}

function resizeInstance(instance){
	item = instance.elements[0];
  resizeGridItem(item);
}

window.onload = resizeAllGridItems();
window.addEventListener("resize", resizeAllGridItems);

allItems = document.getElementsByClassName("item");
for(x=0;x<allItems.length;x++){
  imagesLoaded( allItems[x], resizeInstance);
}

$(document).ready(function() {
	$('.responsiveIng').vanillabox();
});



$('.pinmap').on('click', function(){
  $(this).siblings().toggleClass('active').siblings().removeClass('active');
});
