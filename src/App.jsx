import { useState } from 'react';
import './style.scss';
import Board from './component/Board';
import { calculateWinner } from './component/winner';
import StatusMessage from './component/StatusMessage';
import History from './component/History';

const NEW_GAME = [{ squares: Array(9).fill(null), isXnext: false }];

function App() {
  const [history, setHistory] = useState(NEW_GAME);
  const [currentMove, setCurrentMove] = useState(0);

  const gamingBoard = history[currentMove];

  const { winner, winningSquares } = calculateWinner(gamingBoard.squares);

  const handleSquareClick = clickedPosition => {
    if (gamingBoard.squares[clickedPosition] || winner) {
      return;
    }

    setHistory(currentHistory => {
      const isTraversing = currentMove + 1 !== currentHistory.length;

      const lastGamingState = isTraversing
        ? currentHistory[currentMove]
        : currentHistory[history.length - 1];

      const nextSquaresState = lastGamingState.squares.map(
        (squareValue, position) => {
          if (clickedPosition === position) {
            return lastGamingState.isXnext ? 'X' : 'O';
          }
          return squareValue;
        }
      );

      const base = isTraversing
        ? currentHistory.slice(0, currentHistory.indexOf(lastGamingState) + 1)
        : currentHistory;
      return base.concat({
        //nextSquaresState: Array(9).fill(null),
        squares: nextSquaresState,
        isXnext: !lastGamingState.isXnext,
      });
    });

    setCurrentMove(move => move + 1);
  };

  const moveTo = move => {
    setCurrentMove(move);
  };

  const onNewGameStart = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };

  return (
    <div className="app">
      <h1>TIC <span className='text-green'>TAC</span> TOE</h1>
      
      <StatusMessage winner={winner} gamingBoard={gamingBoard} />
      <Board
        squares={gamingBoard.squares}
        handleSquareClick={handleSquareClick}
        winningSquares={winningSquares}
      />
      <h2 style={{ fontWeight: 'Normal'}}>Current Game History</h2>
      <button
        type="button"
        className={`btn-reset ${winner ? `active` : ``}`}
        onClick={onNewGameStart}
      >
        New game
      </button>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
      <p>React tictactoe game, by <a href='mailto:contact@alainjoelamvane.fr' className='text-orange'>ajamvane</a>. <br></br> Social media <a href='https://bento.me/ajamvane' className='text-green'>links</a></p>
    <div className='bg-balls' />
    </div>
    
  );
}

export default App;
