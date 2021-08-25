
$(function () {
  console.log('Hello Bootstrap5');
});

$(document).ready(function () {
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


  $('.js-scrollLeft').scrollLeft(1500);
});