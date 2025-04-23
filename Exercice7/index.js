const convertToBinary = () => {
  const decimalInput = document.getElementById("decimalInput");
  const binaryResult = document.getElementById("binaryResult");
  const decimalNumber = parseInt(decimalInput.value);

  if (isNaN(decimalNumber) || decimalNumber < 0) {
    binaryResult.textContent =
      "Veuillez entrer un nombre entier positif valide.";
  } else {
    const binaryString = decimalNumber.toString(2);
    binaryResult.textContent = binaryString;
  }
};
