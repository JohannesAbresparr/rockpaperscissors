/**
 * Constants for DOM elements
 * and possible choices
 */

const buttons = document.getElementsByClassName("control");
const playerScore = document.getElementById("player-score");
const opponentScore = document.getElementById("opponent-score");
const playerImage = document.getElementById("player-image");
const opponentImage = document.getElementById("opponent-image");
const messages = document.getElementById("messages");
const choices = ["rock", "paper", "scissors"];

/**
 * Event listeners for buttons
 */


for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("choice");
        playGame(playerChoice);
    }); }




/**
 *Game function, selected button value
 */

function playGame(playerChoice) {

    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];

    let opponentChoice = Math.floor(Math.random() * 3);

    opponentImage.src = `assets/images/${choices[opponentChoice]}.png`;
    opponentImage.alt = choices[opponentChoice];

    let result = checkWinner(choices[opponentChoice], choices[playerChoice]);

    updateScores(result);

}

/**
 * Who won? 
 */

