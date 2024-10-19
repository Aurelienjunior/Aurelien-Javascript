const readline = require('readline');

// Create an interface for reading data from the console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to get a valid number from the user
function getNumber(promptMessage) {
  return new Promise((resolve) => {
    rl.question(promptMessage, (input) => {
      const number = parseFloat(input);
      if (!isNaN(number)) {
        resolve(number);
      } else {
        console.log('Invalid input. Please enter a valid number.');
        resolve(getNumber(promptMessage));
      }
    });
  });
}

// Function to get a valid operator from the user
function getOperator() {
  return new Promise((resolve) => {
    rl.question('Enter an operator (+, -, *, /): ', (input) => {
      if (['+', '-', '*', '/'].includes(input)) {
        resolve(input);
      } else {
        console.log('Invalid operator. Please enter one of +, -, *, /.');
        resolve(getOperator());
      }
    });
  });
}

// Main function to perform the calculator operation
async function main() {
  const numberOne = await getNumber('Enter the first value: ');
  const operator = await getOperator();
  const numberTwo = await getNumber('Enter the second value: ');

  let result;
  switch (operator) {
    case '+':
      result = numberOne + numberTwo;
      break;
    case '-':
      result = numberOne - numberTwo;
      break;
    case '*':
      result = numberOne * numberTwo;
      break;
    case '/':
      result = numberOne / numberTwo;
      break;
    default:
      result = 'Invalid operation';
  }

  console.log(`${numberOne} ${operator} ${numberTwo} is equal to ${result}`);

  // Close the readline interface
  rl.close();
}

// Run the main function
main();
