let amountField = document.getElementById("AmountField");
let balance = document.getElementById("Balance");
let btnDeposit = document.getElementById("btn-Deposit");
let btnWithdraw = document.getElementById("btn-Withdraw");

btnDeposit.addEventListener("click", function () {
  //num = parseInt(prompt("Enter amount "));
  let currentBalance = Number(balance.textContent);
  let deposit = Number(amountField.value);
  balance.textContent = currentBalance + deposit;
  if (currentBalance >= 200) {
    document.getElementById("Balance").style.color = "green";
  }
});

btnWithdraw.addEventListener("click", function () {
  let Withdraw = Number(amountField.value);
  let currentBalance = Number(balance.textContent);
  balance.textContent = currentBalance - Withdraw;

  //
  if (currentBalance < 200) {
    document.getElementById("Balance").style.color = "red";
  } else if (currentBalance < 0) {
    alert("Overdraft");
  }
});
