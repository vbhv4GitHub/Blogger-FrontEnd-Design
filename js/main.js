//#----------------------------------------- <<< Toggle Hamburger Menu --> JQuery >>> ----------------------------------------------//

const responsive = {
  0: {
    items: 1,
  },
  320: {
    items: 1,
  },
  560: {
    items: 2,
  },
  960: {
    items: 3,
  },
};

$(document).ready(function () {
  $nav = $(".nav");
  $toggleCollapse = $(".toggle_collapse");

  // Click event on toggle menu
  $toggleCollapse.click(function () {
    $nav.toggleClass("collapse");
  });

  //#----------------------------------------- >>> Toggle Hamburger Menu --> JQuery <<< ----------------------------------------------//

  // Initializing Owl-Carousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: false,
    nav: true,
    navText: [
      $(".owl-navigation .owl-nav-prev"),
      $(".owl-navigation .owl-nav-next"),
    ],
    responsive: responsive,
  });

  // Click to scroll up to the top
  $(".move-up span").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1300
    );
  });

  // AOS initializaton
  AOS.init();
});

