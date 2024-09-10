var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination-planos",
    }
  });

var swiperMarcas = new Swiper('.swiper-marcas', {
slidesPerView: 1, 
spaceBetween: 10, 
centeredSlides: true,
pagination: {
    el: '.swiper-pagination-marcas',
    clickable: true,
},
});