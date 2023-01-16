
new Swiper(".slider__inner", {
  spaceBetween: 40,
  speed:700,
  
  

  navigation: {
    nextEl: ".slider__btn--next",
    prevEl: ".slider__btn--prev"
  },

  breakpoints: {
    375:{
      slidesPerView: 1,
    },

    650: {
      slidesPerView: 2,
    },
  },

});

new Swiper(".swiper__second", {
  spaceBetween: 30,
  speed:700,
  freeMode:true,  

  navigation: {
    nextEl: ".sciens__btn-next",
    prevEl: ".sciens__btn-prev"
  },

  breakpoints: {
    375:{
      slidesPerView: 1,
    },

    650: {
      slidesPerView: 2,
    },
  },

});

new Swiper(".swiper1", {
  speed: 700,

  navigation: {
    nextEl: ".slide__btn-next",
    prevEl: ".slide__btn-prev"
  },

  breakpoints:{
    375: {
      slidesPerView: 1.25,
    },

    1200: {
      slidesPerView: 5,
    },
  },

});


new Swiper(".work__inner", {
  speed:700,

  navigation: {
    nextEl: ".slide__btn--next",
    prevEl: ".slide__btn--prev"
    
  },

  breakpoints: {
    375: {
      slidesPerView: 1.2,
    },

    1200: {
      slidesPerView: 4,
    },
  }
})