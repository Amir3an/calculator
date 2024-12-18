const display = document.getElementById("display");

function append(value) {
  if (display.innerText === "0") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function calculate() {
  try {
    display.innerText = eval(display.innerText);
  } catch (error) {
    display.innerText = "خطا";
  }
}

function sqrt() {
  display.innerText = Math.sqrt(eval(display.innerText));
}

function percent() {
  display.innerText = eval(display.innerText) / 100;
}
