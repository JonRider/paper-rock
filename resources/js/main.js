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
  updateScore(roundResult);
}

// update the scoreboard and tell us what happened.
function updateScore(roundResult) {
  document.getElementById("score").innerHTML = playerScore + " : " + computerScore;
  document.getElementById("result").innerHTML = roundResult;
  // check for win
  if (playerScore == 5 || computerScore == 5) { end(); }
}

// end the game
  function end() {
    // display end message
    if (playerScore == 5) {
      document.getElementById("win").innerHTML = "Congratulations, You Win!!!";
    }
    else {
      document.getElementById("win").innerHTML = "Sorry. You Lose. The Computer beat you!!!";
    }

    // disable buttons
    document.getElementById("paper").disabled = true;
    document.getElementById("rock").disabled = true;
    document.getElementById("scissors").disabled = true;

    // display reset button
    document.getElementById("reset").style.visibility = "visible";

    // wait for reset button to be pressed
    let reset = document.querySelector('#reset');
    reset.onclick = () => restart();
  }

// restart the game
  function restart() {
    // enable buttons
    document.getElementById("paper").disabled = false;
    document.getElementById("rock").disabled = false;
    document.getElementById("scissors").disabled = false;

    // hide reset button
    document.getElementById("reset").style.visibility = "hidden";

    // hide win text
    document.getElementById("win").innerHTML = "";

    // reset score
    playerScore = 0;
    computerScore = 0;

    // update score and remove status message
    updateScore("");

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
