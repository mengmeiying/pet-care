import './graph-modal.min.js'

const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const burgerOpen = document.querySelector('.burger-button');
const burgerClose = document.querySelector('.burger-menu__close');
const socialsList = document.querySelector('.burger-menu');
const body = document.querySelector('body');
burgerOpen.addEventListener('click', function() {
  socialsList.classList.add('burger-menu--active');
  body.classList.add('stop-scroll')
})

burgerClose.addEventListener('click', function() {
  socialsList.classList.remove('burger-menu--active');
  body.classList.remove('stop-scroll')
})


const modalOpen = document.querySelector('.slide--dog__button');

modalOpen.addEventListener('click', function() {
  new GraphModal().open('first');
})
