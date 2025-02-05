// loader
var loader = function () {
  setTimeout(function () {
    if ($('#loader').length > 0) {
      $('#loader').removeClass('show');
    }
  }, 100);
};


(function ($) {

  'use strict';

  // bootstrap dropdown hover


  $('nav .dropdown').hover(function () {
    var $this = $(this);
    $this.addClass('show');
    $this.find('> a').attr('aria-expanded', true);
    $this.find('.dropdown-menu').addClass('show');
  }, function () {
    var $this = $(this);
    $this.removeClass('show');
    $this.find('> a').attr('aria-expanded', false);
    $this.find('.dropdown-menu').removeClass('show');
  });


  $('#dropdown04').on('show.bs.dropdown', function () {
    console.log('show');
  });

  // home slider
  $('.home-slider').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 0,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    items: 1,
    dragTouch: false,
    navText: ["<span class='ion-chevron-left'></span>", "<span class='ion-chevron-right'></span>"],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: true
      }
    }
  });

  $('.nonloop-block-11').owlCarousel({
    center: false,
    items: 1,
    loop: false,
    stagePadding: 20,
    margin: 50,
    nav: true,
    smartSpeed: 1000,
    navText: ['<span class="ion-chevron-left">', '<span class="ion-chevron-right">'],
    responsive: {
      600: {
        stagePadding: 20,
        items: 1
      },
      800: {
        stagePadding: 20,
        items: 1
      },
      1000: {
        // stagePadding: 200,
        items: 1
      }
    }
  });

  // owl carousel
  var majorCarousel = $('.js-carousel-1');
  majorCarousel.owlCarousel({
    loop: true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    items: 3,
    navText: ["<span class='ion-chevron-left'></span>", "<span class='ion-chevron-right'></span>"],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  });

  // owl carousel
  var major2Carousel = $('.js-carousel-2');
  major2Carousel.owlCarousel({
    loop: true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    items: 4,
    navText: ["<span class='ion-chevron-left'></span>", "<span class='ion-chevron-right'></span>"],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 4,
        nav: true,
        loop: false
      }
    }
  });


  var contentWayPoint = function () {
    var i = 0;
    $('.element-animate').waypoint(function (direction) {

      if (direction === 'down' && !$(this.element).hasClass('element-animated')) {

        i++;

        $(this.element).addClass('item-animate');
        setTimeout(function () {

          $('body .element-animate.item-animate').each(function (k) {
            var el = $(this);
            setTimeout(function () {
              var effect = el.data('animate-effect');
              if (effect === 'fadeIn') {
                el.addClass('fadeIn element-animated');
              } else if (effect === 'fadeInLeft') {
                el.addClass('fadeInLeft element-animated');
              } else if (effect === 'fadeInRight') {
                el.addClass('fadeInRight element-animated');
              } else {
                el.addClass('fadeInUp element-animated');
              }
              el.removeClass('item-animate');
            }, k * 100);
          });

        }, 100);

      }

    }, { offset: '95%' });
  };
  contentWayPoint();

  $('.navbar .dropdown > a').click(function () {
    location.href = this.href;
  });



})(jQuery);


function replacePlaceholder(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      // Create a temporary element to hold the fetched HTML
      const tempElement = document.createElement('div');
      tempElement.innerHTML = data;

      // Replace the placeholder div with the content
      const placeholder = document.getElementById(id);
      placeholder?.replaceWith(...tempElement.childNodes);
    })
    .catch(error => console.error('Error loading component:', error));
}

replacePlaceholder('loader-placeholder', 'components/loader.html');
replacePlaceholder('header-placeholder', 'components/header.html');
replacePlaceholder('footer-placeholder', 'components/footer.html');

loader();

setTimeout(() => {
  $('#footerDateYear').text(new Date().getFullYear());

  // Get the current URL
  var currentUrl = window.location.href;

  // Loop through each navbar link
  $(".navbar-nav .nav-link").each(function () {
    console.log(this.href, currentUrl);
    // Check if the link's href matches the current URL
    if (currentUrl.includes(this.href)) {
      // Add the 'active' class to the parent list item or the link itself
      $(this).addClass("active");
    } else {
      // Remove the 'active' class in case it was added previously
      $(this).removeClass("active");
    }
  });
}, 500);
