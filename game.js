class Game {
  constructor() {
    this.zombie = new Player('Zombie', 1, '🧟‍♂️');
    this.devil = new Player('Devil', 2, '👺');
    this.zombieTurn = true;
    this.devilTurn = false;
    this.turnsTaken = 0;
    this.currentPlayer = this.zombie;
    this.cells = [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
    ];
  }

    updateCurrentCell(cellId){
      var currentCell = parseInt(cellId);
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

  // evaluateCurrentCellToken() {
  //   for (var i = 0; i < this.cells.length; i++) {
  //     if (this.cells[i] === this.zombie.token) {
  //       this.cells[i] = 'ztoken'
  //     } else if (this.cells[i] === this.devil.token)

}
