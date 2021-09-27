class Player {
  constructor(name, id, token) {
    this.name = name;
    this.id = id;
    this.token = token;
    this.wins = 0;
  }

  saveWinstoStorage(){
    var stringifiedWins = JSON.stringify(this.wins)
    localStorage.setItem(`${this.name}wins`, this.wins);
  }

  retrieveWinsFromStorage(){
    var retrievedWins = localStorage.getItem(`${this.name}wins`)
    var parsedWins = JSON.parse(retrievedWins);
    if (parsedWins !== null){
      this.wins = parsedWins;

    }
  }
}
