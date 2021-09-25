class Game {
  constructor(zombie, devil) {
    this.p1 = zombie;
    this.p2 = devil;
    this.currentPlayer = this.p1;
    this.p1Turn = true;
    this.cellTaken = false;
  }
}
