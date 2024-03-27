/**
 * Constants for DOM elements
 */

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const opponentDisplay = document.getElementById("opponentDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const opponentScoreDisplay = document.getElementById("opponentScoreDisplay");


/**
 * Game function
 */

let playerScore = 0;
let opponentScore = 0;

function playGame(playerChoice){

    const opponentChoise = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === opponentChoise) {
        result = "You picked the same!";
    }
    else {
        switch (playerChoice) {
            case "rock":
                result = (opponentChoise === "scissors") ? "YES! you won!" : "Oh no!";
                break;
            case "paper":
                result = (opponentChoise === "rock") ? "YES! you won!" : "Oh no!";
                break;
            case "scissors":
                result = (opponentChoise === "paper") ? "YES! you won!" : "Oh no!";
                break;

        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    opponentDisplay.textContent = `Opponent: ${opponentChoice}`;
    resultDisplay.textContent = result;

    switch (result) {
        case "YES! you won!":
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "Oh no!":
            opponentScore++;
            opponentScoreDisplay.textContent = opponentScore;
            break;
    }


}