const display = document.getElementById("display");

const appendToDisplay = (value) => {
  display.value += value;
};

const clearDisplay = () => {
  display.value = "";
};

const calculateResult = () => {
  try {
    const result = eval(display.value);

    if (isNaN(result) || !isFinite(result)) {
      display.value = "Error";
    } else {
      display.value = result;
    }
  } catch (error) {
    display.value = "Error";
  }
};
