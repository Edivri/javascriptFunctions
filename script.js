// get button to start the game
const startGameBtn = document.getElementById('start-game-btn');

// constant values for the logic
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

//get the player's choice from the input
const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ''
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return;
  }
  return selection;
};
// Using the Math random to get the computer's choice
const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};
// Logic to get the winner
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

// button event to start the game
startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice);
  }
  let message = `You picked ${playerChoice ||
    DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore you `;
  if (winner === RESULT_DRAW) {
    message = message + 'had a draw.';
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + 'won.';
  } else {
    message = message + 'lost.';
  }
  alert(message);
  gameIsRunning = false;
});

// Some function features like bind method

const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = numbers => {
    return isNaN(numbers) ? 0 : numbers;
  };

  let sum = 0;
  //loop for the operations: + - /
  for (const num of numbers) {
    if (operation === 'ADD') {
      sum += validateNumber(num);
    } else if (operation === 'SUB') {
      sum -= validateNumber(num);
    } else{
      sum= 10;
      sum /= validateNumber(num); 
      // division only works with the last number in the array
    }
    
      
  }
  resultHandler(sum);
};

// the callback function to display results
const showResult = (messageText, result) => {
  alert(messageText + ' ' + result);
};


combine(
  showResult.bind(this, 'The result after adding all numbers is:'),
  'ADD',
  1,
  5,
  10,
  -3,
  6,
  10,
  25,
  88
);
combine(
  showResult.bind(this, 'The result after subtracting all numbers is:'),
  'SUB',
  1,
  10,
  15,
  20
);
combine(
  showResult.bind(this, 'The result after dividing all numbers is:'),
  'DIVIDE',
  10,
   20,
   40
);
