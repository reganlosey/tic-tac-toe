var gameBoard = document.querySelector('#game-grid');
var gameSpaces = document.querySelector('.cell');
var playerOneScore = document.querySelector('#p1-score');
var playerTwoScore = document.querySelector('#p2-score');




gameBoard.addEventListener('click', enterToken);






function enterToken(event){
  if (event.target.closest('.cell')){
    event.target.innerText = "🧟‍♂️"
    this.cellTaken = true;
    console.log(this.cellTaken);
  } else if (event.target.innerText = "🧟‍♂️"){
    evnt.target.innerText = "👺"
  }
}
