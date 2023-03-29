import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.scss';
// import 'slick-carousel/slick/slick-theme.scss';

$('.fade').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,

  infinite: true,
  speed: 1000,
  fade: true,
  cssEase: 'linear',
});
