import placePiece from 'ui'
import displayGame from 'ui'

// game class
  // will have a turn variable which will have value x or o
  // x will go first

class Game {
  constructor() {
    this.turn = 'x';
    this.board = [
      ['*','*','*'],
      ['*','*','*'],
      ['*','*','*']
    ];
    displayGame();
  }

  takeTurn() {
    let coords = placePiece();

    if(this.board[coords.x, coords.y] === '*') {
      if(this.turn === 'x') {
        this.board[coords.x, coords.y] = 'x';
        this.turn = 'o';
      } else {
        this.board[coords.x, coords.y] = 'o';
        this.turn = 'x';
      }
    }

  }

};


const game = new Game()
game.start();
