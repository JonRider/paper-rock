// A function which selects a random choice for the computer player
function computerPlay(){
  let options = ['paper', 'rock', 'scissors'];
  let computerSelection = options[Math.floor((Math.random() * 3))];
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
  let roundResult;
  /* in case of a tie */
  if (playerSelection == computerSelection) {
    roundResult = playerSelection[0].toUpperCase() + playerSelection.slice(1) + " and " + computerSelection + ". It's a tie!";
  }
  /* rock possibilities */
  else if(playerSelection == 'rock') {
    if (computerSelection == 'paper') {
       roundResult = "You Lose! Paper beats rock.";
       computerScore++;
    }
    else {
      roundResult = "You Win! Rock beats scissors.";
      playerScore++;
    }
  }
  /* paper possibilities */
  else if(playerSelection == 'paper') {
    if (computerSelection == 'scissors') {
       roundResult = "You Lose! Scissors beat paper.";
       computerScore++;
    }
    else {
      roundResult = "You Win! Paper beats rock.";
      playerScore++;
    }
  }
  /* scissors possibilities */
  else if(playerSelection == 'scissors') {
    if (computerSelection == 'rock') {
       roundResult = "You Lose! Rock beats scissors.";
       computerScore++;
    }
    else {
      roundResult = "You Win! Scissors beat paper.";
      playerScore++;
    }
  }
  console.log("You: " + playerSelection + " | " + "Computer: " + computerSelection);
  console.log(roundResult);
  console.log("Player: " + playerScore);
  //return roundResult;
  updateScore();
}

function updateScore() {
  document.getElementById("score").innerHTML = playerScore + " : " + computerScore ;
}

// start the game
let playerScore = 0;
let computerScore = 0;

// do something when we hit buttons
let paper = document.querySelector('#paper');
paper.onclick = () => playRound("paper", computerPlay());

let rock = document.querySelector('#rock');
rock.onclick = () => playRound("rock", computerPlay());

let scissors = document.querySelector('#scissors');
scissors.onclick = () => playRound("scissors", computerPlay())

//game();
