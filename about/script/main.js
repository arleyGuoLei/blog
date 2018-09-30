window.onload = function () {
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
  
  
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,

    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });
}
