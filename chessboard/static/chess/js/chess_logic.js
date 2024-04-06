// // Рабочий код
// import { Chess } from './chess.js';
// var config = {
//   position: 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R'
// }
// var myBoard = Chessboard('myBoard', config)
// var ruyLopez = 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R'
// var board2 = Chessboard('board2', {
//   position: ruyLopez,
//   draggable: true,
//   dropOffBoard: 'trash',
//   sparePieces: true
// })

// $('#startBtn').on('click', board2.start)
// $('#clearBtn').on('click', board2.clear)

// $('#startBtn').on('click', board2.start)
// $('#clearBtn').on('click', board2.clear)



// import { Chess } from './chess.js';

// var board = null
// var game = new Chess()

// function onDragStart(source, piece, position, orientation) {
//   // do not pick up pieces if the game is over
//   if (game.isGameOver()) {
//     return false
//   }


//   // Check the orientation and piece color
//   if ((orientation === 'white' && piece.search(/^b/) !== -1) ||
//       (orientation === 'black' && piece.search(/^w/) !== -1)) {
//       return false; // Prevent picking up pieces of the wrong color
// }
// }

// // Utilizes chess.js to randomly select from all possible moves.
// function makeRandomMove() {
//   var possibleMoves = game.moves();

//   // game over
//   if (possibleMoves.length === 0) {
//     return
//   };

//   var randomIdx = Math.floor(Math.random() * possibleMoves.length)
//   // TM testing
//   console.log(possibleMoves)
//   game.move(possibleMoves[randomIdx])
//   board.position(game.fen())

//   let mySound = new Audio('static/chess/move-self.mp3')
//   mySound.play()
// }

// // chessboard.js function. Fires when a piece is dropped.
// function onDrop(source, target) {
//   // see if the move is legal
//   try {
//     var move = game.move({
//       from: source,
//       to: target,
//       promotion: 'q' // NOTE: always promote to a queen
//     })
//   } catch (error) {
//     return 'snapback'
//   }

//   let mySound = new Audio('static/chess/move-self.mp3')
//   mySound.play()

//   // If easy mode is selected, make a random move. If medium, run minimax algorithm. If hard, stockfish.
//   const depth = 5;

//   // getStockFish(game.fen(), depth)
//   // .then((bestMove) => {
//   //   console.log('Best move:', bestMove);
//   // })
//   // .catch((error) => {
//   //   console.error('Error:', error);
//   // });
  
//   window.setTimeout(makeRandomMove, 1000)
// }

// // Update the board position after the piece snap for castling, en passant, pawn promotion.
// // Fires when the piece "snap" animation is complete.
// function onSnapEnd() {
//   board.position(game.fen())
  
//   if (game.isCheckmate()) {
//     alert('Checkmate! The game is over.');
//   }  
// }

// // Only runs the chess script if the board element exists within the html.
// if (document.getElementById('myBoard')) {
//   var config = {
//     draggable: true,
//     position: 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R',
//     onDragStart: onDragStart,
//     onDrop: onDrop,
//     onSnapEnd: onSnapEnd
//   }

//   board = Chessboard('myBoard', config)
//   $(window).resize(board.resize)

//   $('#setStartBtn').on('click', function () {
//     board.start();
//     game = new Chess();
//   })
  
//   $('#whiteOrientationBtn').on('click', function () {
//     var config = {
//       draggable: true,
//       position: 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R',
//       onDragStart: onDragStart,
//       onDrop: onDrop,
//       onSnapEnd: onSnapEnd,
//       orientation: 'white'
//     }
  
//     board = Chessboard('myBoard', config)
//     game = new Chess();
//   })
  
//   $('#blackOrientationBtn').on('click', function () {
    

//     var config = {
//       draggable: true,
//       position: 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R',
//       onDragStart: onDragStart,
//       onDrop: onDrop,
//       onSnapEnd: onSnapEnd,
//       orientation: 'black'
//     }
  
//     board = Chessboard('myBoard', config)
//     game = new Chess();

//     window.setTimeout(makeRandomMove, 1000)
//   })
// }


















// import { Chess } from './chess.js';

// var board = null
// var game = new Chess()
// var $status = $('#status')
// var $fen = $('#fen')
// var $pgn = $('#pgn')

// function onDragStart (source, piece, position, orientation) {
//   // do not pick up pieces if the game is over
//   if (game.isGameOver()) {
//     return false
//   }


//   // Check the orientation and piece color
//   if ((orientation === 'white' && piece.search(/^b/) !== -1) ||
//       (orientation === 'black' && piece.search(/^w/) !== -1)) {
//       return false; // Prevent picking up pieces of the wrong color
// }
// }

// function onDrop (source, target) {
//   // see if the move is legal
//   try {
//     var move = game.move({
//       from: source,
//       to: target,
//       promotion: 'q' // NOTE: always promote to a queen
//     })
//   } catch (error) {
//     return 'snapback'
//   }

//   updateStatus()
// }

// // update the board position after the piece snap
// // for castling, en passant, pawn promotion
// function onSnapEnd () {
//   board.position(game.fen())
// }

// function updateStatus () {
//   var status = ''

//   var moveColor = 'White'
//   if (game.turn() === 'b') {
//     moveColor = 'Black'
//   }

//   // checkmate?
//   if (game.in_checkmate()) {
//     status = 'Game over, ' + moveColor + ' is in checkmate.'
//   }

//   // draw?
//   else if (game.in_draw()) {
//     status = 'Game over, drawn position'
//   }

//   // game still on
//   else {
//     status = moveColor + ' to move'

//     // check?
//     if (game.in_check()) {
//       status += ', ' + moveColor + ' is in check'
//     }
//   }

//   $status.html(status)
//   $fen.html(game.fen())
//   $pgn.html(game.pgn())
// }

// var config = {
//   draggable: true,
//   position: 'start',
//   onDragStart: onDragStart,
//   onDrop: onDrop,
//   onSnapEnd: onSnapEnd
// }
// board = Chessboard('myBoard', config)

// updateStatus()







// // Рабочий код
// import { Chess } from './chess.js';
// var config = {
//   position: 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R'
// }
// var myBoard = Chessboard('myBoard', config)
// var ruyLopez = 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R'
// var board2 = Chessboard('board2', {
//   position: ruyLopez,
//   draggable: true,
//   dropOffBoard: 'trash',
//   sparePieces: true
// })




// Рабочий код

import { Chess } from './chess.js';
var board = null;

let parameter = '';

// Проверяем текущую ссылку
if (window.location.href === 'https://3432-193-105-131-7.ngrok-free.app/chessboard/') {
  parameter = '1k6/8/8/8/8/8/8/K6Q w - - 0 1';
}

if (window.location.href === 'https://3432-193-105-131-7.ngrok-free.app/chessboard/rook') {
  parameter = '1k6/8/8/4R3/8/8/8/K7 w - - 0 1';
}

if (window.location.href === 'https://3432-193-105-131-7.ngrok-free.app/chessboard/exercises') {
  // Рабочий код
var config = {
  position: '3k4/7Q/3K4/8/8/8/8/8 w - - 0 1'
}
var myBoard = Chessboard('myBoard', config)
var ruyLopez = '3k4/7Q/3K4/8/8/8/8/8 w - - 0 1'
var board2 = Chessboard('board2', {
  position: ruyLopez,
  draggable: true,
  dropOffBoard: 'trash',
  sparePieces: true
})

}

if (window.location.href === 'https://3432-193-105-131-7.ngrok-free.app/chessboard/exercises-2') {
  // Рабочий код
var config = {
  position: '3k4/3B4/3K4/8/8/6B1/8/8 w - - 0 1'
}
var myBoard = Chessboard('myBoard', config)
var ruyLopez = '3k4/3B4/3K4/8/8/6B1/8/8 w - - 0 1'
var board2 = Chessboard('board2', {
  position: ruyLopez,
  draggable: true,
  dropOffBoard: 'trash',
  sparePieces: true
})

}


let game = new Chess(parameter);

function onDragStart (source, piece, position, orientation) {
  // do not pick up pieces if the game is over
  if (game.isGameOver()) {
    return false
  }


  // Check the orientation and piece color
  if ((orientation === 'white' && piece.search(/^b/) !== -1) ||
      (orientation === 'black' && piece.search(/^w/) !== -1)) {
      return false; // Prevent picking up pieces of the wrong color
}
}

function makeRandomMove () {
  var possibleMoves = game.moves()

  // game over
  if (possibleMoves.length === 0)  {
    // alert('Пат'); // Оповещение о завершении игры
    return;
  }

  var randomIdx = Math.floor(Math.random() * possibleMoves.length)
  game.move(possibleMoves[randomIdx])
  board.position(game.fen())
}

function onDrop (source, target) {
  // see if the move is legal
  var move = game.move({
    from: source,
    to: target,
    promotion: 'q' // NOTE: always promote to a queen for example simplicity
  })

  // illegal move
  if (move === null) return 'snapback'

  // make random legal move for black
  window.setTimeout(makeRandomMove, 250)
  
}

// update the board position after the piece snap
// for castling, en passant, pawn promotion
function onSnapEnd () {
    if (game.isCheckmate()) {
      document.querySelector('.solved .no').innerText = 'да';
      alert('Checkmate! The game is over.');
    }  else if (game.isStalemate()) {
      alert('Stalemate! Draw.');
    }
  board.position(game.fen())
}

var config = {
  draggable: true,
  position: parameter,
  onDragStart: onDragStart,
  onDrop: onDrop,
  onSnapEnd: onSnapEnd
};

board = Chessboard('myBoard', config);




// import { Chess } from './chess.js';

// var board = null // chessboard.js representation of chessboard instance.
// var game = new Chess() // chess.js representation of state of chess game.
// var easyMode = true;
// var mediumMode = false;
// var hardMode = false;

// // Get's the best move from stockfish API endpoint (stockfish.online).
// async function getStockFish(fen, depth) {
    
//   const apiUrl = `https://stockfish.online/api/stockfish.php?fen=${fen}&depth=${depth}&mode=bestmove`;

//   // Use the fetch function to make a GET request to the API
//   return fetch(apiUrl)
//   .then((response) => {
//       if (response.ok) {
//       return response.json();
//       } else {
//       throw new Error('Failed to fetch data');
//       }
//   })
//   .then((data) => {
//       const moves = data['data'].split(' ');
//       const bestMove = moves[1]; // "b1c2"
//       const firstSquare = bestMove.slice(0, 2); // "b1"
//       const secondSquare = bestMove.slice(2); // "c2"
      
//       console.log(firstSquare);  // "b1"
//       console.log(secondSquare); // "c2"
//       console.log(game.get(firstSquare))      
//       return bestMove;
//   })
//   .catch((error) => {
//       console.error(error);
//       throw error;
//   });
// }

// // chessboard.js function. Fires when a piece is picked up. 
// function onDragStart(source, piece, position, orientation) {
//   // do not pick up pieces if the game is over
//   if (game.isGameOver()) {
//     return false
//   }


//   // Check the orientation and piece color
//   if ((orientation === 'white' && piece.search(/^b/) !== -1) ||
//       (orientation === 'black' && piece.search(/^w/) !== -1)) {
//       return false; // Prevent picking up pieces of the wrong color
// }
// }

// // Utilizes chess.js to randomly select from all possible moves.
// function makeRandomMove() {
//   var possibleMoves = game.moves();

//   // game over
//   if (possibleMoves.length === 0) {
//     return
//   };

//   var randomIdx = Math.floor(Math.random() * possibleMoves.length)
//   // TM testing
//   console.log(possibleMoves)
//   game.move(possibleMoves[randomIdx])
//   board.position(game.fen())

//   let mySound = new Audio('static/chess/move-self.mp3')
//   mySound.play()
// }

// // chessboard.js function. Fires when a piece is dropped.
// function onDrop(source, target) {
//   // see if the move is legal
//   try {
//     var move = game.move({
//       from: source,
//       to: target,
//       promotion: 'q' // NOTE: always promote to a queen
//     })
//   } catch (error) {
//     return 'snapback'
//   }

//   let mySound = new Audio('static/chess/move-self.mp3')
//   mySound.play()

//   // If easy mode is selected, make a random move. If medium, run minimax algorithm. If hard, stockfish.
//   const depth = 5;

//   getStockFish(game.fen(), depth)
//   .then((bestMove) => {
//     console.log('Best move:', bestMove);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });
  
//   window.setTimeout(makeRandomMove, 1000)
// }

// Update the board position after the piece snap for castling, en passant, pawn promotion.
// Fires when the piece "snap" animation is complete.
// function onSnapEnd() {
//   board.position(game.fen())
  
//   if (game.isCheckmate()) {
//     alert('Checkmate! The game is over.');
//   }  
// }

// // Only runs the chess script if the board element exists within the html.
// if (document.getElementById('myBoard')) {
//   var config = {
//     draggable: true,
//     position: 'start',
//     onDragStart: onDragStart,
//     onDrop: onDrop,
//     onSnapEnd: onSnapEnd
//   }

//   board = Chessboard('myBoard', config)
//   $(window).resize(board.resize)

//   $('#setStartBtn').on('click', function () {
//     board.start();
//     game = new Chess();
//   })
  
//   $('#whiteOrientationBtn').on('click', function () {
//     var config = {
//       draggable: true,
//       position: 'start',
//       onDragStart: onDragStart,
//       onDrop: onDrop,
//       onSnapEnd: onSnapEnd,
//       orientation: 'white'
//     }
  
//     board = Chessboard('myBoard', config)
//     game = new Chess();
//   })
  
//   $('#blackOrientationBtn').on('click', function () {
//     var config = {
//       draggable: true,
//       position: 'start',
//       onDragStart: onDragStart,
//       onDrop: onDrop,
//       onSnapEnd: onSnapEnd,
//       orientation: 'black'
//     }
  
//     board = Chessboard('myBoard', config)
//     game = new Chess();

//     window.setTimeout(makeRandomMove, 1000)
//   })
// }