/*
   Author       : Theme-Family
   Template Name: Warith - Organic Farm Landing Page Theme
   Version      : 1.0.1
*/

(function ($) {
   "use strict";

   /*PRELOADER JS*/
   $(window).on('load', function () {
      $('.loader').fadeOut();
      $('.atf-preloader').delay(350).fadeOut('slow');
   });
   /*END PRELOADER JS*/

   /*--------------------------------------------------------------
 Sticky Header
--------------------------------------------------------------*/

   $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 10) {
         $('.atf-sticky-header').addClass('atf-sticky-active');
      } else {
         $('.atf-sticky-header').removeClass('atf-sticky-active');
      }
   });


   /*--------------------------------------------------------------
      Mobile Menu
     --------------------------------------------------------------*/

   $('.atf-nav').append('<span class="atf-menu-toggle"><span></span></span>');
   $('.menu-item-has-children').append('<span class="atf-menu-dropdown-toggle"></span>');
   $('.atf-menu-toggle').on('click', function () {
      $(this).toggleClass("atf-toggle-active").siblings('.atf-nav-list').slideToggle();;
   });
   $('.atf-menu-dropdown-toggle').on('click', function () {
      $(this).toggleClass('active').siblings('ul').slideToggle();
   });


   /*--------------------------------------------------------------
      One Page Navigation
     --------------------------------------------------------------*/
   // Click To Go Top
   /* $('.atf-smooth-move').on('click', function () {
      var thisAttr = $(this).attr('href');
      if ($(thisAttr).length) {
         var scrollPoint = $(thisAttr).offset().top - 50;
         $('body,html').animate({
            scrollTop: scrollPoint
         }, 800);
      }
      return false;
   });

   // One Page Active Class
   var topLimit = 300,
      ultimateOffset = 200;

   $('.atf-onepage-nav').each(function () {
      var $this = $(this),
         $parent = $this.parent(),
         current = null,
         $findLinks = $this.find("a");

      function getHeader(top) {
         var last = $findLinks.first();
         if (top < topLimit) {
            return last;
         }
         for (var i = 0; i < $findLinks.length; i++) {
            var $link = $findLinks.eq(i),
               href = $link.attr("href");

            if (href.charAt(0) === "#" && href.length > 1) {
               var $anchor = $(href).first();
               if ($anchor.length > 0) {
                  var offset = $anchor.offset();
                  if (top < offset.top - ultimateOffset) {
                     return last;
                  }
                  last = $link;
               }
            }
         }
         return last;
      }

      $(window).on("scroll", function () {
         var top = window.scrollY,
            height = $this.outerHeight(),
            max_bottom = $parent.offset().top + $parent.outerHeight(),
            bottom = top + height + ultimateOffset;

         var $current = getHeader(top);

         if (current !== $current) {
            $this.find(".active").removeClass("active");
            $current.addClass("active");
            current = $current;
         }
      });
   }); */

   // Slider
   $('.atf-slider').each(function () {

      // Slick Variable
      var $ts = $(this).find('.slick-container');
      var $slickActive = $(this).find('.slick-wrapper');
      var $sliderNumber = $(this).siblings('.slider-number');

      // Auto Play
      var autoPlayVar = parseInt($ts.attr('data-autoplay'), 10);
      // Auto Play Time Out
      var autoplaySpdVar = 3000;
      if (autoPlayVar > 1) {
         autoplaySpdVar = autoPlayVar;
         autoPlayVar = 1;
      }
      // Slide Change Speed
      var speedVar = parseInt($ts.attr('data-speed'), 10);
      // Slider Loop
      var loopVar = Boolean(parseInt($ts.attr('data-loop'), 10));
      // Slider Center
      var centerVar = Boolean(parseInt($ts.attr('data-center'), 10));
      // Pagination
      var paginaiton = $(this).children().hasClass('pagination');
      // Slide Per View
      var slidesPerView = $ts.attr('data-slides-per-view');
      if (slidesPerView == 1) {
         slidesPerView = 1;
      }
      if (slidesPerView == 'responsive') {
         var slidesPerView = parseInt($ts.attr('data-add-slides'), 10);
         var lgPoint = parseInt($ts.attr('data-lg-slides'), 10);
         var mdPoint = parseInt($ts.attr('data-md-slides'), 10);
         var smPoint = parseInt($ts.attr('data-sm-slides'), 10);
         var xsPoing = parseInt($ts.attr('data-xs-slides'), 10);
      }
      // Fade Slider
      var fadeVar = parseInt($($ts).attr('data-fade-slide'));
      (fadeVar === 1) ? (fadeVar = true) : (fadeVar = false);

      // Slick Active Code
      $slickActive.slick({
         infinite: true,
         autoplay: autoPlayVar,
         dots: paginaiton,
         centerPadding: '0',
         speed: speedVar,
         infinite: loopVar,
         autoplaySpeed: autoplaySpdVar,
         centerMode: centerVar,
         fade: fadeVar,
         prevArrow: $(this).find('.slick-arrow-left'),
         nextArrow: $(this).find('.slick-arrow-right'),
         appendDots: $(this).find('.pagination'),
         slidesToShow: slidesPerView,
         responsive: [{
            breakpoint: 1600,
            settings: {
               slidesToShow: lgPoint
            }
         },
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: mdPoint
            }
         },
         {
            breakpoint: 992,
            settings: {
               slidesToShow: smPoint
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: xsPoing
            }
         }
         ]
      });
   })


   /*--------------------------------------------------------------
       Sticky Back To Top
      --------------------------------------------------------------*/

   $(window).on('scroll', function () {
      if ($(window).scrollTop() > 50) {
         $('.atf-sticky-header').addClass('atf-nav');
         $('.atf-back-to-top').addClass('open');
      } else {
         $('.atf-sticky-header').removeClass('atf-nav');
         $('.atf-back-to-top').removeClass('open');
      }
   });

   //**===================Scroll UP ===================**//

   if ($('.atf-back-to-top').length) {
      $(".atf-back-to-top").on('click', function () {
         var target = $(this).attr('data-targets');
         // animate
         $('html, body').animate({
            scrollTop: $(target).offset().top
         }, 1000);

      });
   }


   /*START PARTNER LOGO*/
   $('.atf-brand-active').owlCarousel({
      margin: 10,
      autoplay: true,
      items: 3,
      loop: true,
      nav: false,
      responsive: {
         0: {
            items: 1
         },
         600: {
            items: 3
         },
         1000: {
            items: 5
         }
      }
   })
   /*END PARTNER LOGO*/


   //**===================Counter JS ===================**//

   $('.counter-value').counterUp({
      delay: 10,
      time: 1000
   });

   /* WOW Scroll Spy
  ========================================================*/
   var wow = new WOW({
      //disabled for mobile
      mobile: false
   });

   wow.init();

   //**===================Testimonial Slider ===================**//

   $("#testimonial-slider").owlCarousel({
      margin: 3,
      nav: false,
      loop: true,
      dots: true,
      responsive: {
         0: {
            items: 1
         },
         767: {
            items: 1
         },
         1000: {
            items: 2
         }
      }
   });

   //**===================Testimonial Slider ===================**//

   $("#product-slider").owlCarousel({
      margin: 10,
      nav: false,
      loop: true,
      dots: true,
      responsive: {
         0: {
            items: 1
         },
         767: {
            items: 2
         },
         1000: {
            items: 4
         }
      }
   });
   /*--------------------------------------------------------------
    START NEW SLIDER JS
   --------------------------------------------------------------*/

   $("#news-slider").owlCarousel({
      margin: 5,
      nav: false,
      loop: true,
      dots: true,
      responsive: {
         0: {
            items: 1
         },
         991: {
            items: 2
         },
         1000: {
            items: 3
         }
      }
   });


   /*--------------------------------------------------------------
       END MAILCHAMP JS
      --------------------------------------------------------------*/
   // Background image
   $('.atf-dynamic-bg').each(function () {
      var src = $(this).attr('data-src');
      $(this).css({
         'background-image': 'url(' + src + ')'
      });
   });
   /*--------------------------------------------------------------
   START PARALLAX JS
   --------------------------------------------------------------*/
   (function () {

      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

      } else {
         $(window).stellar({
            horizontalScrolling: false,
            responsive: true
         });
      }

   }());

   /*--------------------------------------------------------------
      END PARALLAX JS
      --------------------------------------------------------------*/

   /* --------------------------------------------------------
           LightCase jQuery Active
        --------------------------------------------------------- */
   $('a[data-rel^=lightcase]').lightcase({
      transition: 'elastic', /* none, fade, fadeInline, elastic, scrollTop, scrollRight, scrollBottom, scrollLeft, scrollHorizontal and scrollVertical */
      swipe: true,
      maxWidth: 1170,
      maxHeight: 600,
   });

   $(document).ready(function () {
      $('.fvd-lang__active').click(function () {
         $(this).toggleClass('active');
         $(this).siblings('.fvd-lang-list').toggleClass('active');
      });
   });


   /*------------------------------Video---------------------------*/

   $(document).ready(function () {
      $('.play-button').on('click', function () {
         const videoWrapper = $('.video-wrapper');
         const video = videoWrapper.find('video')[0];
         if (video) {
            $('.video-thumbnail').hide();
            $(this).hide();
            videoWrapper.show();
            video.play();
         }
      });
   });

   /*------------------------------
   Photo gallery
   ---------------------------*/
   $(document).ready(function () {
      const $slider = $('.fvdgallery-slider');

      if ($slider.length) {
         $slider.slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            responsive: [
               {
                  breakpoint: 768,
                  settings: {
                     slidesToShow: 2
                  }
               },
               {
                  breakpoint: 480,
                  settings: {
                     slidesToShow: 1
                  }
               }
            ]
         });

         $('.custom-prev').on('click', function () {
            $slider.slick('slickPrev');
         });

         $('.custom-next').on('click', function () {
            $slider.slick('slickNext');
         });

         $slider.magnificPopup({
            delegate: '.fvdpopup-link',
            type: 'image',
            gallery: {
               enabled: true
            }
         });
      }
   });




})(jQuery);


