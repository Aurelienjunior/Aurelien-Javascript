const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var choice = ['rock', 'paper', 'scissors'];
const rock = choice[0];
const paper = choice[1];
const scissors = choice[2];

// console.log(rock, paper, scissors);

const UserChoice = rl.question(
  ' Enter a number where Rock: 1, Paper: 2, Scissors: 3  ',
  (userChoice) => {
    console.log(`You entered: ${userChoice}`);

    console.log(
      `You choice ${UserChoice} and the computer choice ${ComputerChoice} `
    );
    rl.close();
  }
);

var ComputerChoice = Math.ceil(Math.random() * 3);
// console.log(randomNum);

if (ComputerChoice == 1) {
  console.log(rock);
} else if (ComputerChoice == 2) {
  console.log(paper);
} else {
  console.log(scissors);
}
