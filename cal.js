const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Calculate anything you want: ', (userChoice) => {
  console.log(`You entered: ${userChoice}`);

  function convertToArray(value) {
    return value.split(' ');
  }

  const userInputArray = convertToArray(userChoice);
  console.log(userInputArray);

  for (const array in userInputArray) {
    console.log(array);
  }

  for (const array of userInputArray) {
    console.log(array);
  }


  rl.close();
});
