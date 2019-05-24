$(function(){
  $('.slider').slick({
  autoplay: true,
    autoplaySpeed: 5000,
    dots:true,
    fade: true,
    prevArrow: '<button class="slide-arrow prev-arrow">prev</button>',
    nextArrow: '<button class="slide-arrow next-arrow">next</button>'
  });
});