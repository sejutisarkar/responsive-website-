//js and jquery codes
//services section
//this is a jquery document method, it executes after a page is ready

$(function() {
  //animate on scroll
  new WOW().init();
});
// work
$(function() {
  $("#work").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true
    }
  });
});
//carousel
$(function() {
  $("#team-members").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true
  });
});
//testimonials

$(function() {
  $("#Customers-testimonials").owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true
  });
});
//Stats
$(function() {
  $('.counter').counterUp({
    delay: 10,
    time: 2000,
  })
});
//clients
$(function() {
  $("#clients").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true
  });
});
