var family_price = 0;
var family_sim = '';
var choice_payment_family = '';
var total_family = 0;
var total_inc_sims = 0;

$(".family-gb-choice").click(function(event) {
  $(".family-gb-choice").removeClass('button-clicked');
  $(this).addClass('button-clicked');
  family_price = parseInt(this.getAttribute("data-price"));
});

$(".sim-choice").click(function(event) {
  $(".sim-choice").removeClass('button-clicked');
  $(this).addClass('button-clicked');
  family_sim = parseInt(this.getAttribute("data-sim"));
});

$(".family-payment-choice").click(function(event) {
  $(".family-payment-choice").removeClass('button-clicked');
  $(this).addClass('button-clicked');
choice_payment_family = this.getAttribute("value");
});

$(".calculate").click(function(event) {
  calculate_total_family();
  $("#total").text(total_family);
});


function calculate_total_inc_sims() {

  if (family_price == "14") {
    total_inc_sims = (family_price + ((family_sim - 1) * 7.2));
  };
  if (family_price == "20") {
    total_inc_sims = (family_price + ((family_sim - 1) * 12))
  };
  if (family_price == "30") {
    total_inc_sims = (family_price + ((family_sim - 1) * 20))
  };
  if (family_price == "40") {
    total_inc_sims = (family_price + ((family_sim - 1) * 28))
  };
};

function calculate_total_family() {
 calculate_total_inc_sims();
   total_family = total_inc_sims;
  if (choice_payment_family == "annual-family") {
    total_family = (total_inc_sims * 12);
  };
  return total_family;
};
