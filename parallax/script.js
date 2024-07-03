const parallax = Array.from(document.querySelectorAll(".parallax"));

window.onscroll = () => {
   parallax.forEach((el) => {
      // apparent scroll speed of the background
      // defaults to half the scroll amount
      const speed = el.dataset.speed || 0.5;
      const windowYOffset = window.pageYOffset;
      const newBgPos = "50% " + (windowYOffset * speed) + "px";
      
      el.style.backgroundPosition = newBgPos;
   });
}
