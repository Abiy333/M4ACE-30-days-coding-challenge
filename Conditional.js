function checkNumber(n) {
  if (n > 0) {
    return "Positive";
  } else if (n < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

// Example usage with a prompt
const input = prompt("Enter a number:");
const num = parseFloat(input);

if (isNaN(num)) {
  console.log("Please enter a valid numeric value.");
} else {
  console.log(`The number is ${checkNumber(num)}.`);
}
