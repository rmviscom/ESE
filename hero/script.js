var swiper = new Swiper(".swiper", {
  grabCursor: true,
  speed: 1500,
  effect: "slide",
  loop: true,
  mousewheel: {
  //  invert: false,
  //  sensitivity: 1,
    forceToAxis: true,
    sensitivity: 1,
    releaseOnEdges: true,
  },
  autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        },
});

swiper.enable();
