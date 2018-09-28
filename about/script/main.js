var swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  // 缩放 zoom
  // zoom: true,
  spaceBetween: 30,
  mousewheel: true,
  loop: true,
  effect: 'fade',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }

});