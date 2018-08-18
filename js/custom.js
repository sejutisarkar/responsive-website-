//js and jquery codes
//services section
//this is a jquery document method, it executes after a page is ready

$(function(){
  //animate on scroll
  new WOW().init();
});
// work
$(function(){
  $("#work").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true
    }
  });
});
//carousel
$(function(){
  $("#team-members").OwlCarousel({
    items:3,
    autoplay: true,
    smartSpeed: 700,
    loop: true
  });
});
