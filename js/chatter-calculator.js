var chatterbox_price = 0;
var chatterbox_min = '';
var choice_payment_chatterbox = '';
var total_chatterbox = 0;
var total_inc_mins = 0;

$(".chatterbox_gb-choice").click(function(event) {
  $(".chatterbox_gb-choice").removeClass('button-clicked');
  $(this).addClass('button-clicked');
  chatterbox_price = parseInt(this.getAttribute("data-price"));
});

$(".min-choice").click(function(event) {
  $(".min-choice").removeClass('button-clicked');
  $(this).addClass('button-clicked');
chatterbox_min = this.getAttribute("data-min");
});

$(".chatter-choice-payment").click(function(event) {
  $(".chatter-choice-payment").removeClass('button-clicked');
  $(this).addClass('button-clicked');
choice_payment_chatterbox = (this.getAttribute("value"));
});

$(".calculate").click(function(event) {
  calculate_total_chatterbox();
  $("#total").text(total_chatterbox);
});


function calculate_total_inc_mins() {

  if (chatterbox_min == "180") {
    total_inc_mins = (chatterbox_price+3);
  };
  if (chatterbox_min == "300") {
    total_inc_mins = (chatterbox_price+5);
  };
  if (chatterbox_min == "600") {
    total_inc_mins = (chatterbox_price+10);
  };

  if (chatterbox_min == "unlimited") {
    total_inc_mins = (chatterbox_price+12);
  };

};

function calculate_total_chatterbox() {
 calculate_total_inc_mins();
   total_chatterbox = total_inc_mins;
  if (choice_payment_chatterbox == "annual-chatterbox") {
    total_chatterbox = (total_inc_mins * 12);
  };
  return total_chatterbox;
};
