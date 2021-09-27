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

  winningCombosZombie() {
    if (this.cells[1] === this.zombie.token && this.cells[2] === this.zombie.token && this.cells[3] === this.zombie.token ||
      this.cells[4] === this.zombie.token && this.cells[5] === this.zombie.token && this.cells[6] === this.zombie.token ||
      this.cells[7] === this.zombie.token && this.cells[8] === this.zombie.token && this.cells[9] === this.zombie.token ||
      this.cells[1] === this.zombie.token && this.cells[4] === this.zombie.token && this.cells[7] === this.zombie.token ||
      this.cells[2] === this.zombie.token && this.cells[5] === this.zombie.token && this.cells[8] === this.zombie.token ||
      this.cells[3] === this.zombie.token && this.cells[6] === this.zombie.token && this.cells[9] === this.zombie.token ||
      this.cells[3] === this.zombie.token && this.cells[5] === this.zombie.token && this.cells[7] === this.zombie.token ||
      this.cells[1] === this.zombie.token && this.cells[5] === this.zombie.token && this.cells[9] === this.zombie.token
    ) {
      return true;
    } else {
      return false
    }
  }
  winningCombosDevil() {
    if (this.cells[1] === this.devil.token && this.cells[2] === this.devil.token && this.cells[3] === this.devil.token ||
      this.cells[4] === this.devil.token && this.cells[5] === this.devil.token && this.cells[6] === this.devil.token ||
      this.cells[7] === this.devil.token && this.cells[8] === this.devil.token && this.cells[9] === this.devil.token ||
      this.cells[1] === this.devil.token && this.cells[4] === this.devil.token && this.cells[7] === this.devil.token ||
      this.cells[2] === this.devil.token && this.cells[5] === this.devil.token && this.cells[8] === this.devil.token ||
      this.cells[3] === this.devil.token && this.cells[6] === this.devil.token && this.cells[9] === this.devil.token ||
      this.cells[3] === this.devil.token && this.cells[5] === this.devil.token && this.cells[7] === this.devil.token ||
      this.cells[1] === this.devil.token && this.cells[5] === this.devil.token && this.cells[9] === this.devil.token
    ) {
      return true;
    } else {
      return false;
    }
}
  declareWinner() {
    if (this.winningCombosZombie()) {
      winnerMessage.innerHTML = `<h1>${this.zombie.name} Wins.</h1>
      <button class="reset-button"id="reset-btn">Play Again?
      </button>`
      currentTurn.innerHTML = '';
      this.zombie.wins++ ;
      this.zombie.saveWinstoStorage();
      zombieScore.innerHTML = `${this.zombie.wins}`
      devilScore.innerHTML = `${this.devil.wins}`
      gameBoard.removeEventListener('click', placeToken);
    } else if (this.winningCombosDevil()){
      winnerMessage.innerHTML = `<h1>${this.devil.name} Wins.</h1>
      <button class="reset-button"id="reset-btn">Play Again?
      </button>`
      currentTurn.innerHTML = ''; //refactor to change to winning message and play again button
      this.devil.wins++;
      this.devil.saveWinstoStorage()
      devilScore.innerHTML = `${this.devil.wins}`
      zombieScore.innerHTML = `${this.zombie.wins}`
      gameBoard.removeEventListener('click', placeToken);
    }
  }
//write function to consolidate displaying scores
//write function to consolidate disabling board

  declareDraw() {
    if (this.turnsTaken === 9 && !this.winningCombosZombie() && !this.winningCombosDevil()){
      this.zombie.saveWinstoStorage();
      this.devil.saveWinstoStorage()
      currentTurn.innerHTML = '';
        winnerMessage.innerHTML = `<h1>🪦 DRAW 🪦</h1>
        <button class="reset-button"id="reset-btn">Play Again?
        </button>`
        zombieScore.innerHTML = `${this.zombie.wins}`
        devilScore.innerHTML = `${this.devil.wins}`
      }
    }

}
