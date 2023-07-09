import { useState } from 'react';
import './style.scss';
import Board from './component/Board';
import { calculateWinner } from './component/winner';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXnext, setIsNext] = useState(false);
  const winner = calculateWinner(squares);
  const nextPlayer = isXnext ? 'X' : 'O';
  const statusMessage = winner
    ? `Winner is ${winner}`
    : `Next player is ${nextPlayer}`;

  const handleSquareClick = clickedPosition => {
    if (squares[clickedPosition] || winner) {
      return;
    }

    setSquares(currentSquares => {
      return currentSquares.map((squareValue, position) => {
        if (clickedPosition === position) {
          return isXnext ? 'X' : 'O';
        }
        return squareValue;
      });
    });

    setIsNext(currentIsXNext => !currentIsXNext);
  };

  return (
    <div className="app">
      <h2>{statusMessage}</h2>
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
