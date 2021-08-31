"use strict";

$(document).ready(function () {
  // layout navbar active
  $('.js-linkPage > li > a').each(function () {
    if ($(this)[0].href === String(window.location)) {
      $(this).removeClass("active");
      $(this).addClass("active");
    }
  }); // fixed

  $(window).scroll(function () {
    var scrollVal = $(this).scrollTop();

    if (scrollVal >= 300) {
      $('.js-fixed').removeClass('top-50');
      $('.js-fixed').addClass('bottom-55');
    } else {
      $('.js-fixed').addClass('top-50');
      $('.js-fixed').removeClass('bottom-50');
    }
  }); // corousel
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
  }); // mobile user recommand forward, back control

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
  $('.js-swiperSlide').on('click', function () {
    $(this).find('.js-chooseCard').addClass('border border-white border-3');
    $(this).siblings().find('.js-chooseCard').removeClass('border border-white border-3');
    $(this).find('.js-checkIcon').addClass('text-white');
    $(this).siblings().find('.js-checkIcon').removeClass('text-white');
    $('.js-selectedTxt').html("\n    <p class=\"mb-4\">\u60A8\u9078\u64C7\u7684\u662F</p>\n    <span class=\"fs-5 lh-30 border-bottom border-secondary border-2 spanb-4\">\u9996\u6B21\u9AD4\u9A57\u8AB2\u7A0B-\u57FA\u790E</p>\n    ");
    $('.js-moveForwardBtn').removeClass('d-none');
  });
}); // swiper
// course

var swiper = new Swiper(".js-courseSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      direction: 'vertical',
      spaceBetween: 74
    },
    415: {
      slidesPerView: 2
    },
    769: {
      slidesPerView: 3
    }
  },
  pagination: false
}); // collapse
// pc

var pcCollapsible = document.getElementById('collapseCourse');
var mdCollapsible = document.getElementById('collapseCourse-md');
var smCollapsible = document.getElementById('collapseCourse-sm'); // screen change init

$(window).resize(function () {
  var width = $(window).width();

  if (width <= 414) {
    $('#collapseCourse').removeClass('show');
    $('#collapseCourse-md').removeClass('show');
    $('.js-selectedTxt').html("");
    $('.js-moveForwardBtn').addClass('d-none');
  } else if (width > 768) {
    $('#collapseCourse-md').removeClass('show');
    $('#collapseCourse-sm').removeClass('show');
    $('.js-selectedTxt').html("");
    $('.js-moveForwardBtn').addClass('d-none');
  } else {
    $('#collapseCourse').removeClass('show');
    $('#collapseCourse-sm').removeClass('show');
    $('.js-selectedTxt').html("");
    $('.js-moveForwardBtn').addClass('d-none');
  }
}); // pc

pcCollapsible.addEventListener('show.bs.collapse', function () {
  $('.js-chooseCourse').removeClass('mb-40 mb-md-48 mb-lg-32');
});
pcCollapsible.addEventListener('hidden.bs.collapse', function () {
  $('.js-chooseCourse').addClass('mb-40 mb-md-48 mb-lg-32');
}); // md

mdCollapsible.addEventListener('show.bs.collapse', function () {
  $('.js-chooseCourse').removeClass('mb-40 mb-md-48 mb-lg-32');
});
mdCollapsible.addEventListener('hidden.bs.collapse', function () {
  $('.js-chooseCourse').addClass('mb-40 mb-md-48 mb-lg-32');
}); // sm

smCollapsible.addEventListener('show.bs.collapse', function () {
  $('.js-chooseCourse').removeClass('mb-40 mb-md-48 mb-lg-32');
  console.log(mdCollapsible, pcCollapsible);
});
smCollapsible.addEventListener('hidden.bs.collapse', function () {
  $('.js-chooseCourse').addClass('mb-40 mb-md-48 mb-lg-32');
}); // chooseSwiper

var chooseSwiper = new Swiper(".js-chooseSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  breakpoints: {
    415: {
      slidesPerView: 2.1,
      spaceBetween: 30
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  },
  pagination: false
}); // space

var spaceSwiper = new Swiper(".js-spaceSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.2
    },
    769: {
      slidesPerView: 4
    }
  },
  pagination: false
});
//# sourceMappingURL=all.js.map
