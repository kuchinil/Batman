const swiper = new Swiper('.main-slider', {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.main-slider-arrow',
  },
})

// Burger-menu
let menuButtonClose = document.querySelector('.menu-button-close')
let btnMenu = document.getElementsByClassName('btn-menu')
let body = document.querySelector('.menu-opened')
for (let i = 0; i < btnMenu.length; i++) {
  btnMenu[i].addEventListener('click', function () {
    body.classList.toggle('open-menu')
  })
}

function closeMenu() {
  body.classList.remove('open-menu')
}
