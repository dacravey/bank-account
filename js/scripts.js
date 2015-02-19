var Account = {
  balance: 0,
  client: "",
  initialize: function(client) {
    this.name = client;
  },
  // customer: function() {
  //   return "Hello there, " + this.name + ".";
  // },

  // withdraw: function(amount) {
  //   this.balance = this.balance - amount;
  // },
  //
  // deposit: function(amount) {
  //   this.balance = this.balance + amount;
  // }
};


$(document).ready(function() {
    var newAccount = Object.create(Account);

  $("form#new-account").submit(function(event) {
    event.preventDefault();
    var client = $("input#name").val();
    newAccount.initialize(client);

    var deposit = parseFloat($("input#deposit").val());
    newAccount.balance = deposit + newAccount.balance;
    $("#balance").text(newAccount.balance);

    $("#client").text(newAccount.client);

    $(".result").show();
    $("#hideafterenter").hide();
    $("#existing").show();
  });

  $("form#deposit").submit(function(event) {
    event.preventDefault();
    var newdeposit = parseFloat($("input#newdeposit").val());
    newAccount.balance = newdeposit + newAccount.balance;
    $("#balance").text(newAccount.balance);
    newdeposit = parseFloat($("input#newdeposit").val(""));
    $(".result").show();
  });

  $("form#withdraw").submit(function(event) {
    event.preventDefault();
    var withdraw = parseFloat($("input#withdraw").val());
    newAccount.balance = newAccount.balance - withdraw;
    $("#balance").text(newAccount.balance);
    withdraw = parseFloat($("input#withdraw").val(""));
    $(".result").show();
  });

});
