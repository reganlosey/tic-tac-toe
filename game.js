class Game {
  constructor() {
    this.zombie = new Player('Zombie', 1, '🧟‍♂️');
    this.goblin = new Player('Goblin', 2, '👹');
    this.zombieTurn = true;
    this.goblinTurn = false;
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
      this.goblinTurn = true;
      this.currentPlayer = this.goblin;
    } else if (this.goblinTurn === true) {
      this.goblinTurn = false;
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
    var p2goblin = this.winningCombos(`${this.goblin.token}`);
    if (p1Zombie) {
      declareWinnerZombie();
      hide(currentTurn);
      this.zombie.wins++ ;
      this.zombie.saveWinstoStorage();
      displayScores();
      disableBoard();
      setTimeout(timeOutRefresh, 2000)
      return true;
    } else if (p2goblin){
      declareWinnerGoblin();
      hide(currentTurn);
      this.goblin.wins++;
      this.goblin.saveWinstoStorage();
      displayScores();
      disableBoard();
      setTimeout(timeOutRefresh, 2000)
      return true;
    }
  }

  declareDraw() {
    if (this.turnsTaken === 9 && !this.declareWinner()){
      this.zombie.saveWinstoStorage();
      this.goblin.saveWinstoStorage();
      hide(currentTurn);
        displayDrawMessage();
        displayScores();
        setTimeout(timeOutRefresh, 2000)
        return true;
      }
    }
}
