/**
 * Constants for DOM elements
 * and possible choises
 */

const buttons = document.getElementsByClassName("control");
const playerScore = document.getElementById("player-score");
const opponentScore = document.getElementById("opponent-score");
const playerImage = document.getElementById("player-image");
const opponentImage = document.getElementById("opponent-image");
const messages = document.getElementById("messages");
const choises = ["rock", "paper", "scissors"];

/**
 * Event listeners for buttons
 */

for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoise = this.getAttribute("choise");
        playGame(playerChoise);
    });

}


/**
 *Game function, selected button value
 */

function playGame(playerChoise) {

    playerImage.src = `assets/images/${choises[playerChoise]}.png`;
    playerImage.alt = choises[playerChoise];

    let opponentChoise = Math.floor(Math.random() * 3);

    opponentImage.src = `assets/images/${choises[playerChoise]}.png`;
    opponentImage.alt = choises[opponentChoise];

    let result = checkWinner(choises[opponentChoise], choises[playerChoise]);

    updateScores(result);

}

/**
 * Who won? 
 */

