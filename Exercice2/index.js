const calculate = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "La division par zéro n'est pas autorisée";
      }
      return num1 / num2;
    default:
      return "Opérateur invalide";
  }
};

const performCalculation = () => {
  const num1Input = document.getElementById("num1Input");
  const num2Input = document.getElementById("num2Input");
  const operatorInput = document.getElementById("operatorInput");
  const resultArea = document.getElementById("resultArea");

  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const operator = operatorInput.value.trim();

  if (isNaN(num1) || isNaN(num2)) {
    resultArea.textContent =
      "Veuillez entrer des nombres valides pour les deux champs.";
    return;
  }

  const result = calculate(num1, num2, operator);

  resultArea.textContent = result;
};
