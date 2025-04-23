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
        return "Division by zero is not allowed";
      }
      return num1 / num2;
    default:
      return "Invalid operator";
  }
};

console.log(calculate(5, 3, "+"));
console.log(calculate(10, 4, "-"));
console.log(calculate(7, 2, "*"));
console.log(calculate(12, 3, "/"));
console.log(calculate(8, 0, "/"));
console.log(calculate(4, 5, "%"));

export default calculate;
