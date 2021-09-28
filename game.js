class Game {
  constructor() {
    this.zombie = new Player('Zombie', 1, '🧟‍♂️');
    this.devil = new Player('Devil', 2, '👺');
    this.zombieTurn = true;
    this.devilTurn = false;
    this.turnsTaken = 0;
    this.currentPlayer = this.zombie;
    this.cells = ['', '', '', '', '', '', '', '', ''];
  }
  updateCurrentCell(cellId) {
    var currentCell = cellId;
    this.cells[currentCell] = this.currentPlayer.token;
  }

  newTurn() {
    if (this.zombieTurn === true) {
      this.zombieTurn = false;
      this.devilTurn = true;
      this.currentPlayer = this.devil;
    } else if (this.devilTurn === true) {
      this.devilTurn = false;
      this.zombieTurn = true;
      this.currentPlayer = this.zombie;
    }
  }

  winningCombos(token) {
    if (this.cells[1] === token && this.cells[2] === token && this.cells[3] === token  ||
      this.cells[4] === token && this.cells[5] === token && this.cells[6] === token  ||
      this.cells[7] === token && this.cells[8] === token && this.cells[9] === token  ||
      this.cells[1] === token && this.cells[4] === token && this.cells[7] === token  ||
      this.cells[2] === token && this.cells[5] === token && this.cells[8] === token  ||
      this.cells[3] === token && this.cells[6] === token && this.cells[9] === token  ||
      this.cells[3] === token && this.cells[5] === token && this.cells[7] === token  ||
      this.cells[1] === token && this.cells[5] === token && this.cells[9] === token
    ) {
      return true;
    } else {
      return false
    }
  }

  declareWinner() {
    var p1Zombie = this.winningCombos(`${this.zombie.token}`);
    var p2Devil = this.winningCombos(`${this.devil.token}`);
    if (p1Zombie) {
      winnerMessage.innerHTML = `<h1>${this.zombie.name} Wins.</h1>`
      hide(currentTurn);
      this.zombie.wins++ ;
      this.zombie.saveWinstoStorage();
      displayScores()
      disableBoard();
    } else if (p2Devil){
      winnerMessage.innerHTML = `<h1>${this.devil.name} Wins.</h1>`
      hide(currentTurn); //refactor to change to winning message and play again button
      this.devil.wins++;
      this.devil.saveWinstoStorage()
      displayScores();
      disableBoard();
    }
  }

  declareDraw() {
    if (this.turnsTaken === 9 && !this.declareWinner()){
      this.zombie.saveWinstoStorage();
      this.devil.saveWinstoStorage();
      hide(currentTurn);
        winnerMessage.innerHTML = `<h1>🪦 DRAW 🪦</h1>`
        displayScores();
      }
    }

    //   resetGame(event) {
    //   event.preventDefault;
    //   this.cells= '';
    //   this.zombieTurn = true;
    //   showCurrentPlayer();
    //   this.zombie.retrieveWinsFromStorage();
    //   this.devil.retrieveWinsFromStorage();
    //   displayScores();
    // }

}
