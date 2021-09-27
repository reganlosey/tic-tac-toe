var gameBoard = document.querySelector('#game-grid');
var boardCells = document.querySelectorAll('.cell');
var playerOneScore = document.querySelector('#zombie-score');
var playerTwoScore = document.querySelector('#devil-score');
var currentTurn = document.querySelector('#whose-turn');


// Event Listeners
window.addEventListener('load', resetGame);
gameBoard.addEventListener('click', placeToken);

// Global Variable
var newGame = new Game;

// Event Handlers
function resetGame(event) {
  event.preventDefault;
  // gameBoard.innerHTML = "";
  // gameBoard.innerHTML += `
  //   <div class="cell cell1" id="cell1"></div>
  //   <div class="cell cell2" id="cell2"></div>
  //   <div class="cell cell3" id="cell3"></div>
  //   <div class="cell cell4" id="cell4"></div>
  //   <div class="cell cell5" id="cell5"></div>
  //   <div class="cell cell6" id="cell6"></div>
  //   <div class="cell cell7" id="cell7"></div>
  //   <div class="cell cell8" id="cell8"></div>
  //   <div class="cell cell9" id="cell9"></div>`
  newGame.zombieTurn = true;
  showCurrentPlayer();
}

function placeToken(event) {
  var selectedCell = event.target;
  var cellId = event.target.id;
  if (!selectedCell.innerHTML) {
    event.target.innerHTML = `${newGame.currentPlayer.token}`;
    newGame.updateCurrentCell(cellId);
    newGame.turnsTaken += 1
    newGame.newTurn();
    showCurrentPlayer();
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
