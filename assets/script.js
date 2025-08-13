let currentDisplay = "";

function appendToDisplay(value) {
  currentDisplay += value;
  document.getElementById("display").value = currentDisplay;
}

function backspace() {
  currentDisplay = currentDisplay.slice(0, -1);
  document.getElementById("display").value = currentDisplay;
}

function clearDisplay() {
  currentDisplay = "";
  document.getElementById("display").value = "";
}

function calculate() {
  try {
    const expression = currentDisplay.replace(/x/g, "*").replace(/:/g, "/");
    const result = eval(expression);
    document.getElementById("display").value = result;
    currentDisplay = result.toString();
  } catch (error) {
    document.getElementById("display").value = "Error";
    currentDisplay = "";
  }
}
