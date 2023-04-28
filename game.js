console.log("We play Rock, Paper, Scissors");

const playableHands = ["rock", "paper", "scissor", "scissors"];



//Get Player's Choice through prompt

let playerChoice = prompt("Please enter which hand you want to play");


if (playableHands.includes(playerChoice.toLowerCase())) {
    let capitalizedHands = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
    console.log("Valid Choice:", capitalizedHands);
} else {
    console.log("Invalid Choice!");
    }
  

//-------------------------------------------------


// Function to get computers Choice, randomly. 

function getComputerChoice() {   
    const choices = ["Rock", "Paper", "Scissors"];
    const computerChoice = Math.floor(Math.random() * 3);
    return choices[computerChoice];
    }

//----------------------------------------------



