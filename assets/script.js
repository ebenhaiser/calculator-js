let currentDisplay = "";

function appendToDisplay(value) {
  currentDisplay += value;
  document.getElementById("display").value = currentDisplay;
}

function backspace() {
  currentDisplay = currentDisplay.slice(0, -1);
  document.getElementById("display").value = currentDisplay;
}

function handleKeyPress(event) {
  const key = event.key;

  const keyMap = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    "+": "+",
    "-": "-",
    "*": "*",
    "/": "/",
    ".": ".",
    ",": ".", // Support comma as decimal separator
    Enter: "=",
    "=": "=",
    Escape: "C",
    Backspace: "backspace",
  };

  const mappedKey = keyMap[key];

  if (mappedKey) {
    if (mappedKey === "=") {
      calculate();
    } else if (mappedKey === "C") {
      clearDisplay();
    } else if (mappedKey === "backspace") {
      backspace();
    } else {
      appendToDisplay(mappedKey);
    }
  }
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

function clearDisplay() {
  currentDisplay = "";
  document.getElementById("display").value = "";
}
