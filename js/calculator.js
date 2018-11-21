var wolf_price = 0;
var choice_payment_wolf = '';
var total_wolf = 0;

var chatterbox_price = 0;
var choice_payment_chatterbox = '';
var total_chatterbox = 0;

<!-- this is the start of wolf calculator -->
$(".wolf-gb-choice").click(function(event) {
  wolf_price = parseInt(this.getAttribute("data-price"));
});

$(".wolf-payment-choice").click(function(event) {
  choice_payment_wolf = (this.getAttribute("value"));
});

$(".calculate").click(function(event) {
  calculate_total_wolf();
  $("#total").text(total);
})

function calculate_total_wolf() {
  total_wolf = wolf_price;
  if (choice_payment_wolf == "annual") {
    total_wolf = (wolf_price * 12);
  }
  return total_wolf;
}

<
!--this is the start of chatterbox calculator -->
$(".chatterbox_gb-choice").click(function(event) {
  chatterbox_price = parseInt(this.getAttribute("data-price"));
});

$(".chatter-choice-payment").click(function(event) {
  choice_payment_chatterbox = (this.getAttribute("value"));
});

$(".calculate").click(function(event) {
  calculate_total_chatterbox();
  $("#total").text(total);
})
