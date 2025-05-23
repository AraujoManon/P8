const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}
function clearDisplay() {
  display.value = "";
}
function calculateResult() {
  if (display.value.includes('/') && display.value.includes('0')) {
    display.value = "Division by zero is not allowed";
    return;
  }
  
  try {
    const result = eval(display.value);
    if (result === Infinity || result === -Infinity) {
      display.value = "Division by zero is not allowed";
    } else {
      display.value = result.toString();
    }
  } catch (error) {
    display.value = "Error";
  }
}
