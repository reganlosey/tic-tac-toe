class Game {
  constructor() {
    this.zombie = new Player('Zombie', 1, '🧟‍♂️');
    this.devil = new Player('Devil', 2, '👺');
    this.zombieTurn = true;
    this.devilTurn = false;
    this.turnsTaken = 0;
    this.currentPlayer = this.zombie;
    this.cells = [
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine'
    ]
  }

  // updateCurrentCell(cell){
  //   var numberedCell = parseInt(cell);
  //   this.cells[numberedCell] = this.currentPlayer.token
  // }

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
//0=1
//1=2
//2=3
//3=4
//4=5
//5=6
//6=7
//7=8
//8=9
  // verticalWin(cells, emoji){
  //   if (cells[0] === emoji && cells[3] === emoji && cells[4] === emoji ||
  //       cells )
  // }
  // }

}
// object for messages to display? this.zombie.winner = "this.zombie.name wins!"
//same for turns. this.zombie.turn = It's this.zombie.name's turn!
