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
  $(".nav-icon4").click(function() {
    $(this).toggleClass("open");
  });
});

function calculatePrice() {
  var weight = document.getElementById("total-weight").value;
  var price = document.getElementById("total-price").value;
  var weight_unit = document.getElementsByName("weight-unit");
  var rate_value;
  for (var i = 0; i < weight_unit.length; i++) {
    if (weight_unit[i].checked) {
      rate_value = weight_unit[i].value;
    }
  }
  var totalprice = (+weight * +rate_value + +price * 1.12) * 1.06;
  var finalprice = totalprice.toFixed(2);
  document.getElementById("final-price").innerHTML = "$" + finalprice;
}

function showCalculator() {
  var element = document.getElementById("calculator-popup");
  element.classList.add("show-calculator");
}

function closeCalculator() {
  var element = document.getElementById("calculator-popup");
  element.classList.remove("show-calculator");
}
