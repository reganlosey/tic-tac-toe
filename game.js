class Game {
  constructor(player1, player2) {
    this.zombie = new Player('Zombie', 1, '🧟‍♂️');
    this.devil = new Player('Devil', 2, '👺');
    this.zombieTurn = true;
    this.devilTurn = false;
    this.turnsTaken = 0;
    this.gameCells = {
      cell1: false,
      cell2: false,
      cell3: false,
      cell4: false,
      cell5: false,
      cell6: false,
      cell7: false,
      cell8: false,
      cell9: false,
    }
  }

  //123, 369
  newTurn() {
    if (this.zombieTurn === true) {
      this.zombieTurn = false;
      this.devilTurn = true;
    } else if (this.devilTurn === true) {
      this.devilTurn = false;
      this.zombieTurn = true;
    }
  }

  diagonalWin() {

  }
}
