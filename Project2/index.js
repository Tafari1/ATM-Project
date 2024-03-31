let clearBtn = document.getElementById("btn-clear");
let inputFieldPin = document.getElementById("PIN");
let EnterBtn = document.getElementById("btn-Enter");

// "===" compares if it is explicitly = to 1234 but inputFieldPin
EnterBtn.addEventListener("click", function () {
  if (inputFieldPin.value == 1234) {
    // this method opens a new tab and redirects the customer to a new page
    window.open("ATMPage.html");
  } else {
    alert(
      "false incorrect pin please write correct pin to avoid card being block"
    );
  }
});

// Clears the fields
clearBtn.addEventListener("click", function () {
  inputFieldPin.value = "";
});
//index html functionality
///////////////////////////////////////////////////////////////////////////////////////////////////
