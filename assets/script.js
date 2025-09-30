let currentDisplay = "";
let currentMemory = 0;

const memoryStoreButton = document.getElementById("memory-recall");
const memoryRecallButton = document.getElementById("memory-recall");
const memoryPlusButton = document.getElementById("memory-plus");
const memoryMinusButton = document.getElementById("memory-minus");
const memoryClearButton = document.getElementById("memory-clear");

memoryStoreButton.disabled = false;
memoryRecallButton.disabled = true;
memoryPlusButton.disabled = true;
memoryMinusButton.disabled = true;
memoryClearButton.disabled = true;

function appendToDisplay(value) {
  if (isNaN(value)) {
    currentDisplay += " ";
  }

  currentDisplay += value;

  if (isNaN(value)) {
    currentDisplay += " ";
  }

  document.getElementById("display").value = currentDisplay;
}

function backspace() {
  currentDisplay = currentDisplay.slice(0, -1);
  if (currentDisplay.length <= 0) {
    document.getElementById("display").value = 0;
  } else {
    document.getElementById("display").value = currentDisplay;
  }
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
    ",": ".",
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

function countPercentage() {
  currentDisplay /= 100;
  document.getElementById("display").value = currentDisplay;
}

function countSquareRoot() {
  currentDisplay = Math.sqrt(currentDisplay);
  document.getElementById("display").value = currentDisplay;
}

function countSquare() {
  currentDisplay *= currentDisplay;
  document.getElementById("display").value = currentDisplay;
}

function countPeriprocal() {
  currentDisplay = 1 / currentDisplay;
  document.getElementById("display").value = currentDisplay;
}

function toggleSign() {
  currentDisplay *= -1;
  document.getElementById("display").value = currentDisplay;
}

function calculate() {
  try {
    const expression = currentDisplay
      .replace(/x/g, "*")
      .replace(/X/g, "*")
      .replace(/:/g, "/")
      .replace(/÷/g, "/");
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
  document.getElementById("display").value = "0";
}

function memoryStore() {
  if (isNaN(Number(currentDisplay))) {
    document.getElementById("display").value = "Invalid Number";
    return;
  }
  currentMemory = Number(currentDisplay);
  memoryRecallButton.disabled = false;
  memoryClearButton.disabled = false;
  memoryPlusButton.disabled = false;
  memoryMinusButton.disabled = false;
}

function memoryRecall() {
  currentDisplay = currentMemory;
  document.getElementById("display").value = currentDisplay;
}

function memoryClear() {
  currentMemory = 0;
  memoryRecallButton.disabled = true;
  memoryClearButton.disabled = true;
  memoryPlusButton.disabled = true;
  memoryMinusButton.disabled = true;
}

function memoryPlus() {
  if (isNaN(Number(currentDisplay))) {
    document.getElementById("display").value = "Invalid Number";
    return;
  }
  currentMemory += Number(currentDisplay);
}

function memoryMinus() {
  if (isNaN(Number(currentDisplay))) {
    document.getElementById("display").value = "Invalid Number";
    return;
  }
  currentMemory -= Number(currentDisplay);
}
