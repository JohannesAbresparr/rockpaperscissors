const game = () => {
    let pScore = 0;
    let oScore = 0;

    const playGame = () => {
        const options = document.querySelectorAll('.options button');
        const playerChoice = document.querySelector('.playerchoice');
        const opponentChoice = document.querySelector('.opponentchoice');

        //**Calculate random opponent choice*/

        const opponentOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function () {
                const opponentRandom = Math.floor(Math.random() * 3);
                const opponentChoice = opponentOptions[opponentRandom];
                
                compareChoises(this.textContent, opponentChoice );


            //Change image pending choice
            playerChoice.src = `./assets/images${this.textContent}.png`;
            opponentChoice.src = `./assets/images${opponentChoice}.png`;

            });
        });
    };

const updateScore = () => {
    const playerScore = document.querySelector('.player-score p');
    const opponentScore = document.querySelector('.opponent-score p');
    playerScore.textContent = pScore;
    opponentScore.textContent = oScore;
};


    const compareChoises = (playerChoice, opponentChoice) => {
        const message = document.querySelector('.message');
        if (playerChoice === opponentChoice){
            message.textContent = "It's draw!";
            return;
        }

        if(playerChoice === 'rock'){
            if(opponentChoice === 'scissors'){
                message.textContent = "You won!";
                pScore++;
                updateScore();
                return;
            }else{
                message.textContent = "You lost!";
                oScore++;
                updateScore();
                return;
            }
        }

        if(playerChoice === 'paper'){
            if(opponentChoice === 'scissors'){
                message.textContent = "You lost!";
                oScore++; updateScore();
                return;
            }else{
                message.textContent = "You won!";
                pScore++; updateScore();
                return;
            }
        }

        if(playerChoice === 'scissors'){
            if(opponentChoice === 'rock'){
                message.textContent = "You lost!";
                oScore++; updateScore();
                return;
            }else{
                message.textContent = "You won!";
                pScore++; updateScore();
                return;
            }
        }

    }



}