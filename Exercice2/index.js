/**
 * Fonction qui effectue une opération mathématique entre deux nombres
 * @param {number} num1 - Premier nombre
 * @param {number} num2 - Deuxième nombre
 * @param {string} operator - Opérateur ('+', '-', '*', '/')
 * @returns {number|string} - Résultat de l'opération ou message d'erreur
 */
function calculate(num1, num2, operator) {
  // Conversion en nombres pour éviter les erreurs
  num1 = Number(num1);
  num2 = Number(num2);

  // Vérification de la validité des nombres
  if (isNaN(num1) || isNaN(num2)) {
    return "Invalid numbers";
  }

  // Vérification de la validité de l'opérateur
  if (!['+', '-', '*', '/'].includes(operator)) {
    return "Invalid operator";
  }

  // Gestion de la division par zéro
  if (operator === '/' && num2 === 0) {
    return "Division by zero is not allowed";
  }

  // Calcul selon l'opérateur
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
  }
}

// Tests
console.log(calculate(5, 3, '+'));   // Affiche 8
console.log(calculate(10, 4, '-'));  // Affiche 6
console.log(calculate(7, 2, '*'));   // Affiche 14
console.log(calculate(12, 3, '/'));  // Affiche 4
console.log(calculate(8, 0, '/'));   // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, '%'));   // Affiche "Invalid operator"

export default calculate;