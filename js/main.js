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
  $(".navbar-toggler").click(function() {
    $(".nav-icon4").toggleClass("open");
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
  var shippingcharge = +weight * +rate_value;
  var finalshipping;
  if (shippingcharge < 4.5) {
    finalshipping = 4.5;
  } else {
    finalshipping = shippingcharge;
  }
  var totalprice = (+finalshipping + +price) * 1.12 * 1.06;
  var mvrprice = +totalprice * 15.42;
  var multiplier = +mvrprice / 5;
  var int_multiplier = Math.round(+multiplier);
  var finalprice = +int_multiplier * 5;
  document.getElementById("final-price").innerHTML = "MVR " + finalprice;
}

function showCalculator() {
  var element = document.getElementById("calculator-popup");
  element.classList.add("show-calculator");
  var element2 = document.getElementById("body-popup");
  element2.classList.add("no-scroll");
}

function closeCalculator() {
  var element = document.getElementById("calculator-popup");
  element.classList.remove("show-calculator");
  var element2 = document.getElementById("body-popup");
  element2.classList.remove("no-scroll");
}

document.getElementById("quote-form").validateForm();

function scrollBenefits() {
  document.querySelector("#benefits").scrollIntoView({
    behavior: "smooth"
  });
}
