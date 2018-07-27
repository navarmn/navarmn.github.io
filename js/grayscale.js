(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  ////////////////////////////////////////////////////////

  // Change color of button in education setion while pressed

  // var phd_button = $('#phd_description')
  var toogle = false;
  var lastButton;

  $(document).ready(function () {

    if ($('#phd_description')[0].classList['value'] == "collapse"  &&
        $('#msc1_description')[0].classList['value'] == "collapse" &&
        $('#msc2_description')[0].classList['value'] == "collapse" &&
        $('#bsc_description')[0].classList['value'] == "collapse") {

          $(('#phd_button')).css('color', 'black');
          $(('#phd_button')).css('background-color', 'white');

          $(('#msc1_button')).css('color', 'black');
          $(('#msc1_button')).css('background-color', 'white');

          $(('#msc2_button')).css('color', 'black');
          $(('#msc2_button')).css('background-color', 'white');

          $(('#bsc_button')).css('color', 'black');
          $(('#bsc_button')).css('background-color', 'white');
        }


    $('.btn-light').click(function(){
      if (lastButton == null) {
        if (toogle == false) {
          $(this).css('color', 'white');
          $(this).css('background-color', 'black');
          toogle = true;
          lastButton = $(this)[0].id;
        }
        else {
          $(this).css('color', 'black');
          $(this).css('background-color', 'white');
        }
      }
      // List not NULL
      else {
        if (lastButton == $(this)[0].id) {

        }
        else {
          if (toogle == true) {
            // lastButton:
            $(('#' + lastButton)).css('color', 'black');
            $(('#' + lastButton)).css('background-color', 'white');
            $(this).css('color', 'white');
            $(this).css('background-color', 'black');
            toogle = true;
            lastButton = $(this)[0].id;
          }
          else {
            // lastButton:
            $(('#' + lastButton)).css('color', 'white');
            $(('#' + lastButton)).css('background-color', 'black');
            $(this).css('color', 'black');
            $(this).css('background-color', 'white');
            toogle = true;
            lastButton = $(this)[0].id;
          }
        }
      }

    })
  })























})(jQuery); // End of use strict
