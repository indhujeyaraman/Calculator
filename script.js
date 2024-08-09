let calculation = localStorage.getItem("calculation") || "0";

displayCalculation();

function updateCalculation(value) {
  if (calculation === "0") {
    calculation = value;
  } else {
    calculation += value;
  }

  displayCalculation();

  localStorage.setItem("calculation", calculation);
}

function displayCalculation() {
  document.querySelector(".js-calculation").innerHTML = calculation;
}

function clearCalculation() {
  calculation = "0"; // Reset to '0' when cleared
  displayCalculation();
  localStorage.setItem("calculation", calculation);
}
