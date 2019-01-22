$(function() {
  var navbar = $(".navbar");

  $(window).scroll(function() {
    if ($(window).scrollTop() <= 40) {
      navbar.removeClass("navbar-scroll");
    } else {
      navbar.addClass("navbar-scroll");
    }
  });
});

var typed2 = new Typed("#typed2", {
  strings: ["Swift Delivery!", "Swift Rates!", "Swift Men!"],
  typeSpeed: 70,
  backSpeed: 20,
  loop: true,
  smartBackspace: true
});

$(document).ready(function() {
  $("#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4").click(function() {
    $(this).toggleClass("open");
  });
});
