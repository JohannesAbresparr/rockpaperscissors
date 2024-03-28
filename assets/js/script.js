/**
 * Constants for DOM elements
 * and possible choises
 * and possible choices
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


function playGame(playerChoice) {

    playerImage.src = `assets/images/${choises[playerChoise]}.png`;
    playerImage.alt = choises[playerChoise];
    
    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];

    let opponentChoise = Math.floor(Math.random() * 3);
   
    opponentImage.src = `assets/images/${choises[playerChoise]}.png`;
    opponentImage.alt = choises[opponentChoise];
    opponentImage.src = `assets/images/${choices[opponentChoice]}.png`;
    opponentImage.alt = choices[opponentChoice];

    let result = checkWinner(choises[opponentChoise], choises[playerChoise]);
  

    updateScores(result);

}
/**
 * Who won? 
 */