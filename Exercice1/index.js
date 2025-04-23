const pairNumbers = (min, max) => {
  let result = "";

  for (let i = min; i <= max; i++) {
    if (i % 2 === 0) {
      if (result !== "") {
        result += ",";
      }
      result += i;
    }
  }

  return result;
};

const displayEvenNumbers = () => {
  const minInput = document.getElementById("minInput");
  const maxInput = document.getElementById("maxInput");
  const resultArea = document.getElementById("resultArea");

  const min = parseInt(minInput.value);
  const max = parseInt(maxInput.value);

  if (isNaN(min) || isNaN(max)) {
    resultArea.textContent =
      "Veuillez entrer des nombres valides pour le minimum et le maximum.";
    return;
  }

  const evenNumbersString = pairNumbers(min, max);
  resultArea.textContent = evenNumbersString;
};
