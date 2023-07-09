const StatusMessage = ({ winner, isXnext, squares }) => {
  const noMovesLeft = squares.every(squareValue => squareValue !== null);
  const nextPlayer = isXnext ? 'X' : 'O';

  const renderStatusMessage = () => {
    if (winner) {
      return <div>Winner is {winner}</div>;
    }
    if (!winner && noMovesLeft) {
      return <div>O and X tied</div>;
    }
    if (!winner && !noMovesLeft) {
      return <div>Next player is {nextPlayer}</div>;
    }
    return null;
  };

  return <div>{renderStatusMessage()}</div>;
};

export default StatusMessage;
