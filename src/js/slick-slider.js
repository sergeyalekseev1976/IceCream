import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.scss';
// import 'slick-carousel/slick/slick-theme.scss';

$('.autoplay').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  adaptiveHeight: true,
});
