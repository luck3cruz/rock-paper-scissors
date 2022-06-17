let hand = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    let pick = Math.floor(Math.random() * hand.length);
    // console.log(pick);
    switch(pick) {
        case 0 : return 'Rock';
        break;
        case 1: return 'Paper';
        break;
        case 2: return 'Scissors';
        break;
        default: return 'Error'; 
    }
}

function playerPlay(input) {
    if (input.length == 4) {
        if (input[0] == 'r' || input[0] == 'R') {
            if (input[1] == 'o' || input[1] == 'O') {
                if (input[2] == 'c' || input[2] == 'C') {
                    if (input[3] == 'k' || input == 'K') {
                        return 'Rock';
                    }
                } 
            }    
        } 
        return 'Error';
    } else if (input.length == 5) {
        if (input[0] == 'p' || input[0] == 'P') {
            if (input[1] == 'a' || input[1] == 'A') {
                if (input[2] == 'p' || input[2] == 'P') {
                    if (input[3] == 'e' || input == 'E') {
                        if (input[4] == 'r' || input[4] == 'R') {
                            return 'Paper';
                        } 
                    } 
                }
            }  
        }
        return 'Error'; 
    } else if (input.length == 8) {
        if (input[0] == 's' || input[0] == 'S') {
            if (input[1] == 'c' || input[1] == 'C') {
                if (input[2] == 'i' || input[2] == 'I') {
                    if (input[3] == 's' || input[3] == 'S') {
                        if (input[4] == 's' || input[4] == 'S') {
                            if (input[5] == 'o' || input[5] == 'O') {
                                if (input[6] == 'r' || input[6] == 'R') {
                                    if (input[7] == 's' || input[7] == 'S') {
                                        return 'Scissors';
                                    }
                                }               
                            }
                        } 
                    } 
                }
            }  
        }
        return 'Error';
    } else {
        return 'Error';
    }
}

// let playerSelection = prompt("Pick one: Rock / Paper / Scissors");
let playerSelection;
let computerSelection = computerPlay();

function playRound (playerSelection, computerSelection) {
    if (playerSelection == 'Error' || computerSelection == 'Error') {
        console.log("Error");
    } else {
        if (playerSelection == 'Rock') {
            if (computerSelection == 'Scissors') {
                playerCount += 1;
                // return 'Player';
                // return "You win! Rock beats scissors."; 
            } else if (computerSelection == 'Paper') {
                computerCount += 1;
                // return 'Computer';
                // return "You lose! Paper beats rock.";
            } else {
                tie = true;
                // return 'Tie';
                // return "It's a tie! You both picked rock."
            }
        } else if (playerSelection == 'Paper') {
            if (computerSelection == 'Scissors') {
                computerCount += 1;
                // return 'Computer';
                // return "You lose! Scissors beats paper."; 
            } else if (computerSelection == 'Rock') {
                playerCount += 1;
                // return 'Player';
                // return "You win! Paper beats rock.";
            } else {
                tie = true;
                // return 'Tie';
                // return "It's a tie! You both picked paper."
            }
        } else {
            if (computerSelection == 'Paper') {
                playerCount += 1;
                // return 'Player';
                // return "You win! Scissors beats paper."; 
            } else if (computerSelection == 'Rock') {
                computerCount += 1;
                // return 'Computer';
                // return "You lose! Rock beats scissors.";
            } else {
                tie = true;
                // return 'Tie';
                // return "It's a tie! You both picked scissors."                                         
            }
        }
    }
}

let playerCount = 0;
let computerCount = 0;
let tie = false;

function game() {
    playerCount = 0;
    computerCount = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = playerPlay(prompt("Pick one: Rock / Paper / Scissors"));
        if (tie == true) {
            i--;
        }
        tie = false; 
        playRound(playerSelection, computerSelection);
        console.log(playerSelection + " vs " + computerSelection + "\n " + playerCount + "-" + co);
    }
    if (computerCount > playerCount) {
        console.log("Computer wins!");
    } else {
        console.log("Player wins!")
    }
}

// console.log(playerPlay('rock'));
// console.log(playRound(playerSelection, computerSelection));
game();