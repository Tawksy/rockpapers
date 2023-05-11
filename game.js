console.log("We play Rock, Paper, Scissors");

//Get Player's Choice through prompt

let computerHand  
let playerChoice

// Playable hands variable 

const choices = ["rock", "paper", "scissors"];
const playableHands = ["rock", "paper", "scissors"];

// result variable 

let result 



// transform user input to be case insensitive

function caseInsensitivePrompt() {
    let promptChoice = prompt("Please enter which hand you want to play");
    if (playableHands.includes(promptChoice.toLowerCase())) {
        return playerChoice = promptChoice.toLowerCase();
    } else {
        console.log("Invalid Choice!");
        }
}

// Function to get computers Choice, randomly. 

function getComputerChoice() {   
    
    const computerChoiceIndex = Math.floor(Math.random() * 3) + 1;
    const computerChoice = choices[computerChoiceIndex];
    return computerChoice;
    }



// computerHand vs. playerChoice 

function playHand() {

    if (computerHand === 'rock' && playerChoice === 'rock') {
        result = 'CPU and You both had Rock: Its a tie!'
    }
    if (computerHand === 'rock' && playerChoice === 'paper') {
        result = 'CPU: Rock, You: Paper => You win!'
    }
    if (computerHand === 'rock' && playerChoice === 'scissors') {
        result = 'CPU: Rock, You: Scissors => You lost!'
    }
    if (computerHand === 'paper' && playerChoice === 'paper') {
        result = 'CPU and You both had Paper: Its a tie!'
    }
    if (computerHand === 'paper' && playerChoice === 'scissors') {
        result = 'CPU: Paper, You: Scissors => You win!'
    }
    if (computerHand === 'paper' && playerChoice === 'rock') {
        result = 'CPU: Paper, You: Rock => You lost!'
    }
    if (computerHand === 'scissors' && playerChoice === 'scissors') {
        result = 'CPU and You both had Scissors: Its a tie!'
    }
    if (computerHand === 'scissors' && playerChoice === 'rock') {
        result = 'CPU: Scissors, You: Rock => You win!'
    }
    if (computerHand === 'rock' && playerChoice === 'scissors') {
        result = 'CPU: Scissors, You: Paper => You lost!'
    }
}

// Game: 1 

playerChoice = caseInsensitivePrompt();
computerHand = getComputerChoice();
playHand(computerHand, playerChoice);
console.log(computerHand, playerChoice);

// Game 2: 

playerChoice = caseInsensitivePrompt();
computerHand = getComputerChoice();
playHand(computerHand, playerChoice);
console.log(result);

// Game :3 

playerChoice = caseInsensitivePrompt();
computerHand = getComputerChoice();
playHand(computerHand, playerChoice);
console.log(result);

// Game 4: 

playerChoice = caseInsensitivePrompt();
computerHand = getComputerChoice();
playHand(computerHand, playerChoice);
console.log(result);

// Game 5: 

playerChoice = caseInsensitivePrompt();
computerHand = getComputerChoice();
playHand(computerHand, playerChoice);
console.log(result);

 



// -------------------- NOT WORKING RIGHT NOW 
// --------------------






