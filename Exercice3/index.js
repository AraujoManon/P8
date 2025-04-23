const calculateAverage = (numbersArray) => {
  if (!numbersArray || numbersArray.length === 0) {
    return "Aucun chiffre pour calculer la moyenne";
  }

  let sum = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
  }

  const average = sum / numbersArray.length;

  return average;
};

const displayAverage = () => {
  const numbersInput = document.getElementById("numbersInput");
  const resultArea = document.getElementById("resultArea");

  const inputValue = numbersInput.value.trim();

  let numbers = [];
  if (inputValue) {
    numbers = inputValue
      .split(",")
      .map((item) => parseFloat(item.trim()))
      .filter((item) => !isNaN(item));
  }

  const averageResult = calculateAverage(numbers);

  resultArea.textContent = averageResult;
};
