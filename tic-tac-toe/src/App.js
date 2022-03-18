import './App.css';
import Board from './Board';
import Square from './Square';
import InfoBoard from './InfoBoard';
import StatusBoard from './StatusBoard';
import { useEffect, useState } from 'react';

const defaultSquares = () => Array.apply(null, Array(9)).map(function () { })
// const defaultSquares = () => Array.apply(null, Array(9)).map(function (x, i) {})

const lines = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
]

let TIES_COUNTER = 0
let X_COUNTER = 0
let O_COUNTER = 0


function App() {
  const [squares, setSquares] = useState(defaultSquares());
  const [currPlayer, setCurrPlayer] = useState('P1');
  const [winner, setWinner] = useState(null)
  const [winningSquares, setWinningSquares] = useState([])

  const reset = () => {
    setSquares(defaultSquares())
    setCurrPlayer('P1')
    setWinningSquares([])
  }
  
  const emptyIndexes = squares
    .map((square, index) => square === undefined ? index : undefined)
    .filter((val) => val !== undefined)

  const getTies = () => {
    if (emptyIndexes.length < 1) {
      TIES_COUNTER += 1
      setTimeout(() => {
        alert('Its a Tie!')
        reset()
      }, 100);
      return true
    }
  }
  // Compare square lines with winning lines`
  const linesThatAre = (a, b, c) => {
    return lines.filter(winIndexes => {
      const winValues = winIndexes.map(index => squares[index]);
      // console.log(`winvalues = ${winValues}, ${[a,b,c]}`)
      return JSON.stringify([a, b, c].sort()) === JSON.stringify((winValues.sort()))
    })
  }

  useEffect(() => {

    // GET WINNER FROM GAME
    const getWinner = (squares) => {
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          if (squares[a] === 'x') {
            X_COUNTER += 1
            setWinner('x')
            setWinningSquares(lines[i])
          } else if (squares[a] !== 'x') {
            O_COUNTER += 1
            setWinner('o')
            setWinningSquares(lines[i])
          }
          console.log(lines[i])
          return squares[a];
        }
      }
      return getTies();
    }
    const winner = getWinner(squares)
    if (winner) {
      return setTimeout(() => {
        alert(`${winner.toUpperCase()} wins!`)
        reset()
      }, 200);
    }

    // HANDLE COMPUTER GAMEPLAY 
    const computerChoice = (randomIndex) => {
      let newSquares = squares;
      newSquares[randomIndex] = 'o';
      setSquares([...newSquares])
      setCurrPlayer('x')
    }
    if (!winner) {
      if (currPlayer === 'o') {
        const winningRows = linesThatAre('o', 'o', undefined)
        const blockRows = linesThatAre('x', 'x', undefined)
        const smartRows = linesThatAre('o', undefined, undefined)
        if (winningRows.length > 0) {
          let winPosition = winningRows[0].filter(index => squares[index] === undefined)[0]
          setTimeout(() => { computerChoice(winPosition) }, 200);
        } else if (blockRows.length > 0) {
          let blockPosition = blockRows[0].filter(index => squares[index] === undefined)[0]
          setTimeout(() => { computerChoice(blockPosition) }, 400);
        } else if (smartRows.length > 0) {
          let smartPosition = smartRows[0].filter(index => squares[index] === undefined)[0]
          setTimeout(() => { computerChoice(smartPosition) }, 600);
        } else {

        // let computerWon = linesThatAre('o', 'o', 'o').length>0

        const randomIndex = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)]


        setTimeout(() => { computerChoice(randomIndex) }, 400);
      }
    }
  }
  }, [currPlayer])





const handleSquareClick = (index) => {
  let newSquares = squares;
  if (isPlayerTurn) {
    if (newSquares[index] !== ('o' || 'x') && newSquares[index] === undefined) {
      newSquares[index] = 'x';
      setSquares([...newSquares])
      setCurrPlayer('o')
    }
  }
  else {

  }
  return squares[index]
}

const isPlayerTurn = squares.filter(square => square !== undefined).length % 2 === 0

const isPlayerTwoTurn = squares.filter(square => square !== null).length % 2 === 1;

const winStyles = {
  backgroundColor: '#2cbbb0',
  color: '#0e141a'
}


// useEffect(() => {
//   const isPlayerTwoTurn = squares.filter(square => square !== null).length % 2 === 1; 
//   if (isPlayerTwoTurn & !isPlayerTurn ){
//     let newSquares = squares
//     newSquares[index] = 'o'
//     setSquares([...newSquares])
//   }
// }, [squares])
// 


return (

  <main>
    <Board>
      <InfoBoard
        player={currPlayer}
        reset={reset}
      />
      {squares.map((square, index) =>
        <Square
          key={index}
          x={square === 'x' ? 1 : 0}
          o={square === 'o' ? 1 : 0}
          onClick={() => handleSquareClick(index)}
          iswinning={winningSquares.includes(index) ? 
          'true' : 'false'}
        />
        
      )}
      <StatusBoard
        xcount={X_COUNTER}
        ocount={O_COUNTER}
        tiescount={TIES_COUNTER} />
    </Board>
    {/* {!!winner && winner === 'x' && (
      <div>
        X Wins!
      </div>
    )} */}
  </main>
);
}

export default App;
