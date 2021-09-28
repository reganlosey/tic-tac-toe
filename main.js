var gameBoard = document.querySelector('#game-grid');
var boardCells = document.querySelectorAll('.cell');
var currentTurn = document.querySelector('#whose-turn');
var winnerMessage = document.querySelector('#display-winner');
var zombieScore = document.querySelector('#zombie-score');
var devilScore = document.querySelector('#devil-score');
var resetButton = document.querySelector('#reset-button');
var drawMessage = document.querySelector('#draw-message');

// Event Listeners
window.addEventListener('load', refreshBoard);
gameBoard.addEventListener('click', placeToken);
resetButton.addEventListener('click', resetGame);


// Global Variable
var newGame = new Game();
// Event Handlers
// function resetGame(event) {
//   event.preventDefault;
//   boardCells.innerHTML = '';
//   newGame.zombieTurn = true;
//   showCurrentPlayer();
//   newGame.zombie.retrieveWinsFromStorage();
//   newGame.devil.retrieveWinsFromStorage();
//   displayScores();
// }

function refreshBoard(){
  for (var i =0; i < boardCells.length; i++){
    boardCells[i].innerHTML = ''
  }
  newGame.cells = ['', '', '', '', '', '', '', '', ''];
  newGame.zombie.retrieveWinsFromStorage();
  newGame.devil.retrieveWinsFromStorage();
  showCurrentPlayer();
  winnerMessage.innerHTML = ``
  displayScores();
  newGame.turnsTaken = 0;
  enableBoard();
}

function resetGame(){
  for (var i =0; i < boardCells.length; i++){
    boardCells[i].innerHTML =''
  }
  newGame.cells =  ['', '', '', '', '', '', '', '', ''];
  localStorage.clear();
  newGame.zombie.wins = 0;
  newGame.devil.wins = 0;
  newGame.turnsTaken = 0;
  displayScores();
  newGame.devilTurn = true;
  winnerMessage.innerHTML = '';
  show(currentTurn);
  enableBoard();
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
    currentTurn.innerHTML = `<h1>${newGame.currentPlayer.name}, make your move</h1>`
  } else if (newGame.devilTurn) {
    currentTurn.innerHTML = `<h1>${newGame.currentPlayer.name}, make your move</h1>`
  }
}

function hide(element){
  element.classList.add('hidden');
}

function show(element){
  element.classList.remove('hidden')
}

function displayScores(){
  zombieScore.innerHTML = `${newGame.zombie.wins}`
  devilScore.innerHTML = `${newGame.devil.wins}`
}

function disableBoard(){
  gameBoard.removeEventListener('click', placeToken);
}

function enableBoard(){
  gameBoard.addEventListener('click', placeToken);
}

function timeOutRefresh(){
  for (var i =0; i < boardCells.length; i++){
    boardCells[i].innerHTML =''
  }
  newGame.cells =  ['', '', '', '', '', '', '', '', ''];
  displayScores();
  newGame.devilTurn = true;
  newGame.turnsTaken = 0;
  winnerMessage.innerHTML = '';
  drawMessage.innerHTML= '';
  show(currentTurn);
  enableBoard();

}
