function convertToBinary() {
  const decimalInput = document.getElementById("decimalInput");
  const binaryResult = document.getElementById("binaryResult");
  if (!decimalInput || !binaryResult) {
    return;
  }

  // Vérifier si l'entrée contient des lettres
  if (/[a-zA-Z]/.test(decimalInput.value)) {
    binaryResult.textContent = "";
    return;
  }

  const decimalNumber = parseInt(decimalInput.value);

  if (isNaN(decimalNumber)) {
    binaryResult.textContent = "";
    return;
  }

  if (decimalNumber < 0) {
    binaryResult.textContent = "Le nombre doit être positif";
    return;
  }

  binaryResult.textContent = decimalNumber.toString(2);
}
