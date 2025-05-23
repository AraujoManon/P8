/**
 * Fonction qui calcule la moyenne d'un tableau de nombres
 * @param {number[]} numbers - Tableau de nombres
 * @returns {number|string} - Moyenne des nombres ou message d'erreur
 */
function calculateAverage(numbers = []) {
  // Vérification si le tableau est vide
  if (numbers.length === 0) {
    return "No numbers to calculate average";
  }

  // Vérification que tous les éléments sont des nombres valides
  const validNumbers = numbers.filter(num => typeof num === 'number' && !isNaN(num));
  
  if (validNumbers.length === 0) {
    return "No valid numbers in the array";
  }

  // Calcul de la somme avec reduce pour une meilleure performance
  const sum = validNumbers.reduce((acc, num) => acc + num, 0);
  
  // Calcul de la moyenne
  return sum / validNumbers.length;
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default calculateAverage;