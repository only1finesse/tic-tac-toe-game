import './App.css';
import Board from './Board';
import Square from './Square';
import InfoBoard from './InfoBoard';
import StatusBoard from './StatusBoard';
import { useEffect, useState } from 'react';


const INITIAL = "";
const X_PLAYER = "X"
const O_PLAYER = "O"

const defaultSquares = () => Array.apply(null, Array(9)).map(function () {})
// const defaultSquares = () => Array.apply(null, Array(9)).map(function (x, i) {})


function App() {
  const [squares, setSquares] = useState(defaultSquares());

  // useEffect(() => {
  //   const isPlayerTwoTurn = squares.filter(square => square !== null).length % 2 === 1; 
  //   if (isPlayerTwoTurn){
  //     alert(1)
  //   }
  // })

  function handleSquareClick(index) {
    const isPlayerTurn = squares.filter(square => square !== undefined).length % 2 === 0
    if (isPlayerTurn) {
      let newSquares = squares;
      newSquares[index] = 'x';
      setSquares([...newSquares])
    }
    console.log(isPlayerTurn, squares[index], squares)
  }

  return (
    <main>
      <Board>
        <InfoBoard />
        {squares.map((square, index) =>
          <Square
            key={index}
            x={square === 'x' ? 1 : 0}
            o={square === 'o' ? 1 : 0}
            onClick={() => handleSquareClick(index)}
          />
        )}
        <StatusBoard />
      </Board>
    </main>
  );
}

export default App;
