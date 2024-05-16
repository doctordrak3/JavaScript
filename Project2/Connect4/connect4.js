class Player {
  constructor(color) {
    this.color = color;
  }
}

class Game {
  constructor(height, width) {
    this.HEIGHT = height;
    this.WIDTH = width;
    this.players = [new Player("#ff0000"), new Player("#0000ff")];
    this.currPlayer = this.players[0];
    this.board = [];

    this.makeBoard();
    this.makeHtmlBoard();
    this.gameOver = false;
    this.startButton = document.getElementById("start");
    this.startButton.addEventListener("click", () => this.startGame());
  }

  // create in-JS board structure
  makeBoard() {
    for (let y = 0; y < this.HEIGHT; y++) {
      this.board.push(Array.from({ length: this.WIDTH }));
    }
  }

  // make HTML table and row of column tops
  makeHtmlBoard() {
    const board = document.getElementById("board");

    // make column tops
    const top = document.createElement("tr");
    top.setAttribute("id", "column-top");
    top.addEventListener("click", (evt) => this.handleClick(evt));

    for (let x = 0; x < this.WIDTH; x++) {
      const headCell = document.createElement("td");
      headCell.setAttribute("id", x);
      top.append(headCell);
    }

    board.append(top);

    // make main part of board
    for (let y = 0; y < this.HEIGHT; y++) {
      const row = document.createElement("tr");

      for (let x = 0; x < this.WIDTH; x++) {
        const cell = document.createElement("td");
        cell.setAttribute("id", `${y}-${x}`);
        row.append(cell);
      }

      board.append(row);
    }
  }

  // find top empty y for given column x
  findSpotForCol(x) {
    for (let y = this.HEIGHT - 1; y >= 0; y--) {
      if (!this.board[y][x]) {
        return y;
      }
    }
    return null;
  }

  // update DOM to place piece into HTML table of board
  placeInTable(y, x) {
    const piece = document.createElement("div");
    piece.classList.add("piece");
    piece.style.backgroundColor = this.currPlayer.color;
    piece.style.top = -50 * (y + 2);

    const spot = document.getElementById(`${y}-${x}`);
    spot.append(piece);
  }

  // announce game end
  endGame(msg) {
    alert(msg);
    this.gameOver = true;
  }

  // handle click of column top to play piece
  handleClick(evt) {
    if (this.gameOver) return;
    const x = +evt.target.id;
    const y = this.findSpotForCol(x);
    if (y === null) return;

    this.board[y][x] = this.currPlayer;
    this.placeInTable(y, x);

    if (this.checkForWin()) {
      return this.endGame(`Player ${this.currPlayer.color} won!`);
    }

    if (this.board.every((row) => row.every((cell) => cell))) {
      return this.endGame("Tie!");
    }

    this.currPlayer =
      this.currPlayer === this.players[0] ? this.players[1] : this.players[0];
  }

  // check board cell-by-cell for "does a win start here?"
  checkForWin() {
    function _win(cells) {
      return cells.every(
        ([y, x]) =>
          y >= 0 &&
          y < this.HEIGHT &&
          x >= 0 &&
          x < this.WIDTH &&
          this.board[y][x] === this.currPlayer
      );
    }

    for (let y = 0; y < this.HEIGHT; y++) {
      for (let x = 0; x < this.WIDTH; x++) {
        const horiz = [
          [y, x],
          [y, x + 1],
          [y, x + 2],
          [y, x + 3],
        ];
        const vert = [
          [y, x],
          [y + 1, x],
          [y + 2, x],
          [y + 3, x],
        ];
        const diagDR = [
          [y, x],
          [y + 1, x + 1],
          [y + 2, x + 2],
          [y + 3, x + 3],
        ];
        const diagDL = [
          [y, x],
          [y + 1, x - 1],
          [y + 2, x - 2],
          [y + 3, x - 3],
        ];

        if (
          _win.call(this, horiz) ||
          _win.call(this, vert) ||
          _win.call(this, diagDR) ||
          _win.call(this, diagDL)
        ) {
          return true;
        }
      }
    }
    return false;
  }

  startGame() {
    const player1Color = document.getElementById("player1-color").value;
    const player2Color = document.getElementById("player2-color").value;
    this.players[0].color = player1Color;
    this.players[1].color = player2Color;

    this.currPlayer = this.players[0];
    this.board = [];
    this.makeBoard();
    const board = document.getElementById("board");
    board.innerHTML = "";
    this.makeHtmlBoard();
    this.gameOver = false;
  }
}

new Game(6, 7);
