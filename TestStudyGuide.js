alert("Steel your mind for this, the ultimate game of skill!");
var Average = 0;
var games = 1;
var totalTurns = 0;

start();

function playGame(player) {
    var Turns = 0;
    var Correct = 0;	
    var Answer = Math.floor(Math.random()*(100)+1);
    do {
        var Guess = prompt("Guess the integer between 1 and 100!");
        Turns++;
        if (isNaN(Guess) !== true) {
            if (Guess == Answer) {
                alert("CORRECT! You guessed it in "+Turns+" turns.");
				totalTurns = Turns + totalTurns;
				var Average = totalTurns / games;
					alert("Your average guesses per game is "+Average+".");
                Correct = 1;
            }
            else if (Guess > Answer) {
                alert("Hint: Try a lower number!");
            }
            else {
                alert("Hint: Try a higher number!");
            }
        }
        else {
            alert("Quitter!");
        }
    }
    while (Correct == 0);
}

function start() {
    var playAgain = 'y';
    do {
        playGame();
		games++;
        playAgain = prompt("Would you like to play again? (y or n)");
		
    }
    while(playAgain == 'y');
}

