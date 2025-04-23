const calculateAverage = (numbersArray) => {
  if (!numbersArray || numbersArray.length === 0) {
    return "No numbers to calculate average";
  }

  let sum = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
  }

  const average = sum / numbersArray.length;

  return average;
};

console.log(calculateAverage([5, 10, 15]));
console.log(calculateAverage([10, 20, 30, 20]));
console.log(calculateAverage());

export default calculateAverage;
