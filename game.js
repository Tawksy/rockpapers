console.log("We play Rock, Paper, Scissors");

const playableHands = ["rock", "paper", "scissor", "scissors"];



//Get Player's Choice through prompt

let playerChoice = prompt("Please enter which hand you want to play");


if (playableHands.includes(playerChoice.toLowerCase())) {
    let capitalizedHands = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
} else {
    console.log("Invalid Choice!");
    }
  

//-------------------------------------------------
// Playable hands 

const choices = ["rock", "paper", "scissors"];


// Function to get computers Choice, randomly. 

function getComputerChoice() {   
    
    const computerChoiceIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[computerChoiceIndex];
    return computerChoice;
    }

let computerHand = getComputerChoice();


//----------------------------------------------

//Function to determine ethe outcome of the game 

function outcomeGame(result) {
    return result;
}
// Make computerHand play versus playerChoice 


function playTheGame(playerChoice, computerHand) {


    if (playerChoice === "rock") {
        if (computerHand === "rock") {
            return outcomeGame('Even'); 
        } else if (computerHand === "paper") {
            return outcomeGame('You lost!'); 
        } else {
            return outcomeGame('You win');
    }
}   
    else if (playerChoice === 'paper') {
        if (computerHand === 'rock') {
            return outcomeGame('You win');
    }   else if (computerHand === 'paper') 
            return outcomeGame('Even'); 
       else {
            return outcomeGame('You lost!');
}
}
    else if (playerChoice === 'scissors') {
        if (computerHand === 'rock') {
            return outcomeGame('You lost!');
    }   else if (computerHand === 'paper') {
            return outcomeGame('You win');
    }   else {
            return outcomeGame('Even');
    }
}

}



console.log(playTheGame(playerChoice, computerHand));




