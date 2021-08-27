
$(document).ready(function () {
  // layout navbar active
  $('.js-linkPage > li > a').each(function () {
    if ($(this)[0].href === String(window.location)) {
      $(this).removeClass("active");
      $(this).addClass("active");
    }
  })
  // fixed
  $(window).scroll(function () {
    let scrollVal = $(this).scrollTop();
    console.log(scrollVal);
    if (scrollVal >= 300) {
      $('.js-fixed').removeClass('top-50');
      $('.js-fixed').addClass('bottom-50');
    } else {
      $('.js-fixed').addClass('top-50');
      $('.js-fixed').removeClass('bottom-50');
    }
  });
  // corousel
  // owl
  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 30,
    nav: false,
    dots: false,
    slideTransition: 'linear',
    responsive: {
      768: {
        items: 2.2
      },
      1000: {
        items: 1.2
      }
    }
  });

  // mobile user recommand forward, back control
  $('.js-forward').on('click', function (e) {
    e.preventDefault();
    $('.js-userTop').addClass('d-none');
    $('.js-userBottom').removeClass('d-none');
    $(this).addClass('disabled');
    $('.js-back').removeClass('disabled');
  });
  $('.js-back').on('click', function (e) {
    e.preventDefault();
    $('.js-userBottom').addClass('d-none');
    $('.js-userTop').removeClass('d-none');
    $(this).addClass('disabled');
    $('.js-forward').removeClass('disabled');
  });
});

// swiper
// course
let swiper = new Swiper(".js-courseSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      direction: 'vertical',
      spaceBetween: 74,
    },
    415: {
      slidesPerView: 2,

    },
    769: {
      slidesPerView: 3,

    }
  },
  pagination: false,
});