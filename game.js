class Game {
  constructor() {
    this.zombie = new Player('Zombie', 1, '🧟‍♂️');
    this.devil = new Player('Devil', 2, '👺');
    this.zombieTurn = true;
    this.devilTurn = false;
    this.turnsTaken = 0;
    this.currentPlayer = this.zombie;
    this.cells = ['', '', '', '', '', '', '', '', ''];
    // this.winningCombos = [
    //   [1, 2, 3], [4, 5, 6], [7,8,9],
    //   [1,4,7], [2, 5, 8], [3, 6, 9],
    //   [3,5,7], [1,5,9]
    // ]
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


  declareWinner() {
    if (this.winningCombosZombie()) {
      currentTurn.innerHTML = `<h1>${this.zombie.name} Wins.</h1>
      <button class="reset-button"id="reset-btn">Play Again?
      </button>`
      this.zombie.wins += 1;
    }
  }
}
