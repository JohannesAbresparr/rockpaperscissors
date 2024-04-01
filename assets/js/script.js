const game = () => {
    let playerScore = 0;
    let opponentScore = 0;

const playGame = () => {    
    const options = document.querySelectorAll('.options button');
    const playerchoice = document.querySelector('.playerchoice');
    const opponentchoice = document.querySelector('.opponentchoice');

//**Calculate random opponent choice*/

    const opponentOptions = ['rock','paper','scissors'];
        
    options.forEach(option => {
        option.addEventListener('click', function() {
            const opponentRandom = Math.floor( Math.random() * 3);
            const opponentchoice = opponentOptions[opponentRandom];
            console.log(opponentchoice);
        });

    });


    
   
};




}