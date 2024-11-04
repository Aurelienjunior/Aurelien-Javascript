interface Question {
  question: string;
  choices: string[];
  answers: number[]; // Array to allow multiple correct answers
}

const questions: Question[] = [
  {
    question: 'Capital of Cameroon?',
    choices: ['Douala', 'Yaounde', 'New York', 'Center Region'],
    answers: [1],
  },
  {
    question: '_ * 2 - 4 + 2 * 5 = 13',
    choices: ['2.5', '3.5', '5', '7.5'],
    answers: [1],
  },
  {
    question: 'Who is Steffen Curry?',
    choices: ['An Astronaut', 'A footballer', 'An Actor', 'An NBA Player'],
    answers: [3],
  },
  {
    question: 'Which of the following are programming languages?',
    choices: ['Python', 'HTML', 'CSS', 'JavaScript'],
    answers: [0, 3],
  },
  {
    question: 'Which countries are in Africa?',
    choices: ['Brazil', 'Nigeria', 'Egypt', 'Japan'],
    answers: [1, 2],
  },
];

let currentQuestion: number = 0;
let score: number = 0;

function loadQuestion(): void {
  const q: Question = questions[currentQuestion];
  const questionElement = document.getElementById('question') as HTMLElement;
  questionElement.innerText = q.question;

  const choicesContainer = document.getElementById('choices') as HTMLElement;
  choicesContainer.innerHTML = '';

  q.choices.forEach((choice, index) => {
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'choice';
    checkbox.value = index.toString();
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(choice));
    choicesContainer.appendChild(label);
  });
}

function submitAnswer(): void {
  const selectedChoices = document.querySelectorAll('input[name="choice"]:checked') as NodeListOf<HTMLInputElement>;
  const selectedValues = Array.from(selectedChoices).map(choice => parseInt(choice.value));
  const correctAnswers = questions[currentQuestion].answers;

  // Check if all selected answers match the correct answers
  if (selectedValues.length === correctAnswers.length && selectedValues.every(val => correctAnswers.includes(val))) {
    score++;
  }

  // Move to the next question or show the score
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
}

function showScore(): void {
  const quizContainer = document.querySelector('.quiz-container') as HTMLElement;
  quizContainer.innerHTML = `<h2>Your score: ${score} / ${questions.length}</h2>`;
}

const submitBtn = document.getElementById('submitBtn') as HTMLButtonElement;
submitBtn.addEventListener('click', submitAnswer);

loadQuestion();
