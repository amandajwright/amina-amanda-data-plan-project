var wolf_price = 0;
var choice_payment_wolf = '';
var total_wolf = 0;

var chatterbox_price = 0;
var chatterbox_min = '';
var choice_payment_chatterbox = '';
var total_chatterbox = 0;
var total_inc_mins = 0;

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

<!-- this is the start of chatterbox calculator -->
$(".chatterbox_gb-choice").click(function(event) {
  chatterbox_price = parseInt(this.getAttribute("data-price"));
});

$(".min-choice").click(function(event) {
  chatterbox_min = this.getAttribute("data-min");
});

$(".chatter-choice-payment").click(function(event) {
  choice_payment_chatterbox = (this.getAttribute("value"));
});

$(".calculate").click(function(event) {
  calculate_total_chatterbox();
  $("#total").text(total_chatterbox);
})


function calculate_total_inc_mins() {

  if (chatterbox_min == "180") {
    total_inc_mins = (chatterbox_price+3);
  }
  if (chatterbox_min == "300") {
    total_inc_mins = (chatterbox_price+5);
  }
  if (chatterbox_min == "600") {
    total_inc_mins = (chatterbox_price+10);
  }

  if (chatterbox_min == "unlimited") {
    total_inc_mins = (chatterbox_price+12);
  }

}

function calculate_total_chatterbox() {
 calculate_total_inc_mins();
   total_chatterbox = total_inc_mins;
  if (choice_payment_chatterbox == "annual") {
    total_chatterbox = (total_inc_mins * 12);
  }
  return total_chatterbox;
}
