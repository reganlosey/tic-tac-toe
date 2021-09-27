var gameBoard = document.querySelector('#game-grid');
var boardCells = document.querySelectorAll('.cell');
var playerOneScore = document.querySelector('#zombie-score');
var playerTwoScore = document.querySelector('#devil-score');
var currentTurn = document.querySelector('#whose-turn');
var winnerMessage = document.querySelector('#display-winner');
var zombieScore = document.querySelector('#zombie-score');
var devilScore = document.querySelector('#devil-score');

// Event Listeners
window.addEventListener('load', resetGame);
gameBoard.addEventListener('click', placeToken);

// Global Variable
var newGame = new Game();
// Event Handlers
function resetGame(event) {
  event.preventDefault;
  boardCells.innerHTML = '';
  newGame.zombieTurn = true;
  showCurrentPlayer();
  newGame.zombie.retrieveWinsFromStorage();
  newGame.devil.retrieveWinsFromStorage();
  zombieScore.innerHTML = `${newGame.zombie.wins}`
  devilScore.innerHTML = `${newGame.devil.wins}`
}

function placeToken(event) {
  var selectedCell = event.target;
  var cellId = event.target.id;
  if (!selectedCell.innerHTML) {
    event.target.innerHTML = `${newGame.currentPlayer.token}`;
    newGame.updateCurrentCell(cellId);
    newGame.turnsTaken += 1;
    newGame.newTurn();
    showCurrentPlayer();
    newGame.declareWinner();
    newGame.declareDraw();
    return;
  }
}

function showCurrentPlayer() {
  if (newGame.zombieTurn) {
    currentTurn.innerHTML = `<h1>It's ${newGame.currentPlayer.name}'s turn!</h1>`
  } else if (newGame.devilTurn) {
    currentTurn.innerHTML = `<h1>It's ${newGame.currentPlayer.name}'s turn!</h1>`
  }
}
