document.getElementById("calculateBtn").addEventListener("click", function () {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operator = document.getElementById("operator").value;

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").textContent = "Result = Please enter valid numbers.";
    return;
  }

  let result;
  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      if (num2 === 0) {
        document.getElementById("result").textContent = "Result = Cannot divide by zero.";
        return;
      }
      result = divide(num1, num2);
      break;
    default:
      document.getElementById("result").textContent = "Result = Invalid operation.";
      return;
  }

  document.getElementById("result").textContent = `Result = ${result.toFixed(2)}`;
});

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

