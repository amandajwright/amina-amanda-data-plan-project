
var wolf_price = 0;
var choice_payment = '';
var total = 0;

$(".wolf-gb-choice").click(function(event) {
   wolf_price = parseInt(this.getAttribute("data-price"));
});

$(".wolf-payment-choice").click(function(event) {
  choice_payment = (this.getAttribute("value"));
});

$(".calculate").click(function(event) {
  calculate_total();
  $("#total").text(total);
})

  function calculate_total() {
   total = wolf_price;
  if (choice_payment == "annual") {
    total = (wolf_price * 12);}
    return total;
  }
