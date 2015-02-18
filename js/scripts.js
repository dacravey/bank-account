var Account = {
  balance: 0,

  // customer: function() {
  //   return "Hello there, " + this.name + ".";
  // },

  withdraw: function(amount) {
    this.balance = this.balance - amount;
  },

  deposit: function(amount) {
    this.balance = this.balance + amount;
  }
};


$(document).ready(function() {
    var newAccount = Object.create(Account);

  $("form#new-account").submit(function(event) {
    event.preventDefault();

    var deposit = parseFloat($("input#deposit").val());
    newAccount.balance = deposit + newAccount.balance;
    $("#balance").text(newAccount.balance);
    $(".result").show();
    $("#hideinitial").hide();
  });
});
