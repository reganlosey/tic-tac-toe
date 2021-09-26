var gameBoard = document.querySelector('#game-grid');
var boardCells = document.querySelectorAll('.cell');
var playerOneScore = document.querySelector('#zombie-score');
var playerTwoScore = document.querySelector('#devil-score');
var currentTurn = document.querySelector('#whose-turn');


// Event Listeners
window.addEventListener('load', resetGame);
gameBoard.addEventListener('click', placeToken);

// Global Variable
var newGame = new Game();

// Event Handlers
function resetGame(event) {
  event.preventDefault;
  gameBoard.innerHTML = "";
  gameBoard.innerHTML += `
    <div class="cell cell1" id="cell1">1</div>
    <div class="cell cell2" id="cell2">2</div>
    <div class="cell cell3" id="cell3">3</div>
    <div class="cell cell4" id="cell4">4</div>
    <div class="cell cell5" id="cell5">5</div>
    <div class="cell cell6" id="cell6">6</div>
    <div class="cell cell7" id="cell7">7</div>
    <div class="cell cell8" id="cell8">8</div>
    <div class="cell cell9" id="cell9">9</div>`
  newGame.zombieTurn = true;
  // currentTurn.innerHTML = `<h1>It's ${newGame.zombie.name}'s turn!'</h1>`
}

function placeToken(event) {
  if (event.target.closest('.cell') && newGame.zombieTurn === true) {
    event.target.innerHTML = `${newGame.zombie.token}`;
    newGame.turnsTaken++
    newGame.newTurn();
    updatePlayerTurn();
    return;
  } else if (event.target.closest('.cell') && newGame.devilTurn === true) {
    event.target.innerHTML = `${newGame.devil.token}`;
    newGame.turnsTaken++
    newGame.newTurn();
    updatePlayerTurn();
    return;
  }

}


function updatePlayerTurn() {
  for (var i = 0; i < boardCells.length; i++) {
    if (boardCells[i].innerHTML === newGame.zombie.token) {
      currentTurn.innerHTML = `<h1> It's ${newGame.devil.name}'s turn!</h1>`
      console.log("nice lmao");
    } else {
      currentTurn.innerHTML = `<h1> It's ${newGame.zombie.name}'s' turn!`
    }
  }
}
//target the position of the game board that I want to populate. If the click happens in that position, populate with the token of the current player, if it is their turn. If it is NOT their turn, populate with other token. Call switch turns function.
