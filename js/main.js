$('.slider-container').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  centerMode: true,
  variableWidth: true,
  draggable: false,
  prevArrow: '<span class="slide-prev">PREV</span>',
  nextArrow: '<span class="slide-next">NEXT</span>',
});

$('.slider-container')
  .on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.slick-list').addClass('do-transition')
  })
  .on('afterChange', function(){
    $('.slick-list').removeClass('do-transition')
  });