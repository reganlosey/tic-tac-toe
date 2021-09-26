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
  // gameBoard.innerHTML = "";
  // gameBoard.innerHTML += `
  //   <div class="cell cell1" id="cell1">1</div>
  //   <div class="cell cell2" id="cell2">2</div>
  //   <div class="cell cell3" id="cell3">3</div>
  //   <div class="cell cell4" id="cell4">4</div>
  //   <div class="cell cell5" id="cell5">5</div>
  //   <div class="cell cell6" id="cell6">6</div>
  //   <div class="cell cell7" id="cell7">7</div>
  //   <div class="cell cell8" id="cell8">8</div>
  //   <div class="cell cell9" id="cell9">9</div>`
  newGame.zombieTurn = true;
}

function placeToken(event) {
  if (event.target.closest('.cell') && newGame.zombieTurn === true) {
    event.target.innerText = newGame.zombie.token;
    newGame.newTurn();
  } else if (event.target.closest('.cell') && newGame.devilTurn === true) {
    event.target.innerText = newGame.devil.token;
    newGame.newTurn();
  }
  return;
}

//target the position of the game board that I want to populate. If the click happens in that position, populate with the token of the current player, if it is their turn. If it is NOT their turn, populate with other token. Call switch turns function.


// for (var i = 0; i < boardCells.length; i++) {
//   if (event.target == boardCells[i] && newGame.zombieTurn == true) {
//     event.target.innerText = newGame.zombie.token;
//     event.target.id === newGame.zombie.id;
//     console.log(event.target.id);
//     newGame.zombieTurn = false;
//     return
//   } else if (newGame.zombieTurn === false) {
//     newGame.devilTurn = true
//     event.target.innerText = newGame.devil.token;
//     newGame.devilTurn = false;
//     newGame.newTurn();
//   }
