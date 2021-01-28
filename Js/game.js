const game = () => {
    let pScore = 0;
    let cScore = 0;

    // Start the Game
    const startGame = () => {
        const playbtn = document.querySelector('.intro button');
        const introscreen = document.querySelector('.intro');
        const match = document.querySelector('.match');
        playbtn.addEventListener('click', () => {
            introscreen.classList.add('fadeout');
            match.classList.add('fadein')
        })
    };
    // Play Match
    const playmatch = () => {
        const options = document.querySelectorAll('.option button');
        const playerhand = document.querySelector('.playerhand');
        const computerhand = document.querySelector('.computerhand');
        const hands = document.querySelectorAll('.hands img')
        hands.forEach(hand=>{
            hand.addEventListener('animationend',function(){
                this.style.animation = "";
            })
        })
        //  Computer option
        const computerOption = ['rock', 'paper', 'scissors'];
        options.forEach((option) => {
            option.addEventListener('click', function () {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOption[computerNumber];
             setTimeout(() =>{                
                // // Update Images
                playerhand.src = `./imgs/${this.textContent}.png`;
                computerhand.src = `./imgs/${computerChoice}.png`;
                // calling comparision function
                compareHands(this.textContent,computerChoice);},2000)
        
            //   animation part
                playerhand.style.animation = 'shakeplayer 2s ease';
                computerhand.style.animation = 'shakecomputer 2s ease';
        
            });
        });

    };
    // Update score
    const updateScore = ()=>{
    const playerScore = document.querySelector('.playerscore p');
    const computerScore = document.querySelector('.computerscore p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
}
    // Comparision Function
    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');
        // if its tie
        if (playerChoice === computerChoice) {
            winner.textContent = 'It is a tie';
            return;
        }
        // Check for rock
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'You Wins';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }
        // Check for paper
        if (playerChoice === 'paper') {
            if (computerChoice ==='scissors') {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'You Wins';
                pScore++;
                updateScore();
                return;
            }
        }
        // Check for scissors
        if (playerChoice === 'scissors') {
            if (computerChoice === 'rock') {
                winner.textContent = 'Computer Wins:)'; 
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'You Wins';
                pScore++;
                updateScore();
                return;
            }
        }

    }

    // Call all the inner function
    startGame();
    playmatch();
}
// Start the game function
game();