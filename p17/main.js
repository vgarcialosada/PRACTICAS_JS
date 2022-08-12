$(document).ready(function () {
  $("#rock, #paper, #scissors").on("click", function () {
    rockPaperScissors(this.id);
  });
  choices = ["🗿", "📄", "✂️"];
  playerScore = 0;
  computerScore = 0;
  function computerChoice() {
    opponent = choices[Math.floor(Math.random() * 3)];
    return opponent;
  }

  function textDisplay(playerChoice, opponent) {
    var results = document.getElementById("results");
    var playerScoreDisplay = document.getElementById("playerScore");
    var computerScoreDisplay = document.getElementById("computerScore");
    if (computerScore === 10 || playerScore === 10) {
      computerScore = 0;
      playerScore = 0;
      results.innerHTML = "";
    }
    results.innerHTML +=
      "You picked: " + playerChoice + " Opponent picked: " + opponent + "<br> ";
    if (playerChoice === opponent) {
      computerScore++;
      playerScore++;
      results.innerHTML += "It's a draw!";
      computerScoreDisplay.innerHTML = computerScore;
      playerScoreDisplay.innerHTML = playerScore;
    } else if (
      (playerChoice === choices[0] && opponent === choices[1]) ||
      (playerChoice === choices[1] && opponent === choices[2]) ||
      (playerChoice === choices[2] && opponent === choices[0])
    ) {
      results.innerHTML += "You lose!";
      computerScore++;
      computerScoreDisplay.innerHTML = computerScore;
    } else {
      results.innerHTML += "You win!";
      playerScore++;
      playerScoreDisplay.innerHTML = playerScore;
    }
    results.innerHTML += " <br> ";
    if (playerScore === 10) {
      results.innerHTML = "Congratulations! You win!";
    }
    if (computerScore === 10) {
      results.innerHTML = "You lose! Better luck next time!!";
    }
  }
  function rockPaperScissors(playerChoice) {
    opponent = computerChoice();
    if (playerChoice === "rock") {
      playerChoice = choices[0];
    } else if (playerChoice === "paper") {
      playerChoice = choices[1];
    } else if (playerChoice === "scissors") {
      playerChoice = choices[2];
    }
    textDisplay(playerChoice, opponent);
  }
});
