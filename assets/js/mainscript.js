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
let mobile_nav_icon = document.querySelector(".mobile-nav-btn");
let mobile_nav_bar = document.querySelector(".navbar");
mobile_nav_icon.addEventListener("click", () => {
  // mobile_nav_bar.classList.toggle("open");
  mobile_nav_icon.classList.toggle("clicked");
});
window.addEventListener("scroll", () => {
  let navbar = document.querySelector(".nav-bar");

  navbar.classList.toggle("sticky", window.scrollY > 8);

  let logo_element = document.querySelector(".nav-logo");
  logo_element.src = "assets/img/Soluserv Logo.png";
  if (window.scrollY > 8) {
    // set the new image source
    logo_element.src = "assets/img/Soluserv Logo B.png";
  } else {
    // set the initial image source
    logo_element = logo_element.src;
  }
});
// assets/img/Soluserv Logo.png
