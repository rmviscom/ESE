var swiper = new Swiper(".swiper", {
  grabCursor: true,
  speed: 500,
  effect: "slide",
  loop: false,
  mousewheel: {
  //  invert: false,
  //  sensitivity: 1,
    forceToAxis: true,
    sensitivity: 1,
    releaseOnEdges: true,
  },
  autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        },
});

swiper.enable();
