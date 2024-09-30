import { auto } from '@popperjs/core';
import { space } from 'postcss/lib/list';
import Swiper, { Navigation, EffectFade, Pagination, Scrollbar} from 'swiper';
Swiper.use([Navigation, Pagination, Scrollbar]);


const Slider = new Swiper('.trainer__swiper', {
  slidesPerView: 3,
  spaceBetween: 40,
  loop: true,
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    dragSize: 210,
  },
});
