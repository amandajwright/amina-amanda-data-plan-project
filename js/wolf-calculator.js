var wolf_price = 0;
var choice_payment_wolf = '';
var total_wolf = 0;

$(".wolf-gb-choice").click(function(event) {
  $(".wolf-gb-choice").removeClass('button-clicked');
  $(this).addClass('button-clicked');
wolf_price = parseInt(this.getAttribute("data-price"));
});

$(".wolf-payment-choice").click(function(event) {
  $(".wolf-payment-choice").removeClass('button-clicked');
  $(this).addClass('button-clicked');
choice_payment_wolf = (this.getAttribute("value"));
});

$(".calculate-wolf").click(function(event) {
  calculate_total_wolf();
  $("#total-wolf").text(total_wolf);
});

function calculate_total_wolf() {
  total_wolf = wolf_price;
  if (choice_payment_wolf == "annual-lonewolf") {
    total_wolf = (wolf_price * 12);
  };
  return total_wolf;
};
