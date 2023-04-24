console.log("Welcome to Rock Paper Scissors")

const playableHands = ["rock","paper","scissor","scissors"];

let playerChoice = prompt("Please enter which hand you want to play");
if (playableHands.includes(playerChoice.toLowerCase())) {
    let capitalizedHands = playerChoice.charAt(0).toUpperCase() + playerChoice.charAt()
    console.log("Valid Choice:", capitalizedHands);
} else {
    console.log("Invalid Choice!");
}
// console.log(userInput); 





// Eigentliche Funktion um zwischen Rock Paper Scissor 
// auszuwählen (randomly)----------------------------

function getComputerChoice() {   
    const choices = ["Rock", "Paper", "Scissors"];
    const computerChoice = Math.floor(Math.random() * 3);
    return choices[computerChoice];
    }

//----------------------------------------------

function playChoices(computerChoice, playerChoice) {
    if (playerChoice = "rock") {
        if (computerChoice = "scissor", "scissors") {
            console.log("You win")
            else {
                console.log("You lose!");
            }
        }
    }
}



    

//--------------------------------------------






