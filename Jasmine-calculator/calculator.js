let loanAmount = document.getElementById("loan-amount").value;
let loanYears = document.getElementById("loan-years").value;
let loanRate = document.getElementById("loan-rate").value;
let monthlyPayment = "";

window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

let monthlyPaymentElement = document.getElementById("monthly-payment");

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  loanAmount = getCurrentUIValues().amount;
  loanRate = getCurrentUIValues().rate;
  loanYears = getCurrentUIValues().years;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  setupIntialValues();
  calculateMonthlyPayment(loanAmount, loanYears, loanRate);
  updateMonthly();

}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(amount, years, rate) {

  monthlyPayment = (amount * (rate / 12)) / (1 - (1 + rate / 12) ** (years * 12 * -1))
  monthlyPayment = parseFloat(monthlyPayment.toFixed(2));
  return monthlyPayment
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  monthlyPaymentElement.textContent = monthlyPayment.toString();
}