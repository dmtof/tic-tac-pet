let players = ['x', 'o'];
let activePlayer = 0;
const fieldSize = 6;

let board;

function startGame() {
  activePlayer = 0;
  board = [];
  for (let i = 0; i < fieldSize; i++) {
    board.push([]);
    for (let y = 0; y < fieldSize; y++) {
      board[i].push('');
    }
  }
  renderBoard(board);
}

function win(row, col) {
  let horizontal = 0;
  let vertical = 0;
  let mainDiagonal = 0;
  let secondDiagonal = 0;

  for (let i = 0; i < board.length; i++) {
    horizontal = board[row][i] == players[activePlayer] ? horizontal + 1 : horizontal;
    vertical = board[i][col] == players[activePlayer] ? vertical + 1 : vertical;
    mainDiagonal = board[i][i] == players[activePlayer] ? mainDiagonal + 1 : mainDiagonal;
    secondDiagonal = board[i][board[i].length - i - 1] == players[activePlayer] ? secondDiagonal + 1 : secondDiagonal;

    if (horizontal == board.length || vertical == board.length || mainDiagonal == board.length || secondDiagonal == board.length) {
      showWinner(activePlayer);
    }
    // Множество попыток понять почему ничего не работает...
    
    /*if (board[row][i] == players[activePlayer]) {
      horizontal += 1;
    } else if (board[i][col] == players[activePlayer]) {
      vertical += 1;
    } else if (board[i][i] == players[activePlayer]) {
      mainDiagonal += 1;
    } else if (board[i][board[i].length - i - 1] == players[activePlayer]) {
      secondDiagonal += 1;
    }*/

    /*switch (players[activePlayer]) {
      case board[row][i]:
        horizontal += 1;
        break;
      case board[i][col]:
        vertical += 1;
        break;
      case board[i][i]:
        mainDiagonal += 1;
        break;
      case board[i][board[i].length - i - 1]:
        secondDiagonal += 1;
        break;
    }*/
  }
}

function click(row, col) {
  board[row][col] = players[activePlayer];
  renderBoard(board);
  win(row, col);
  activePlayer = activePlayer == 0 ? 1 : 0;
}