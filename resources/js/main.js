$(document).ready(function(){
  $('.carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  var prev = 0;
  var $window = $(window);
  var nav = $('.navbar');

  $window.on('scroll', function(){
    var scrollTop = $(this).scrollTop();
    if (scrollTop - prev > 50) {
    var navHeight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + navHeight}, 150);
      prev = scrollTop;
    } else if (prev - scrollTop > 50) {
      $('.navbar').animate({top: 0}, 150);
      prev = scrollTop;
    }
  });
});
