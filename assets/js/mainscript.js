// new WOW().init();

// jQuery(document).ready(function ($) {
//   $(".counter").counterUp({
//     delay: 10,
//     time: 1000,
//   });
// });

$(".partners-slide").owlCarousel({
  autoplay: true,
  loop: true,
  margin: 15,
  nav: false,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 5,
    },
  },
});

// Navigation
window.addEventListener("scroll", () => {
  let navbar = document.querySelector(".nav-bar");
  navbar.classList.toggle("sticky", window.scrollY > 8);
});
