const StatusMessage = ({ winner, gamingBoard }) => {
  const { squares, isXnext } = gamingBoard;

  const noMovesLeft = squares.every(squareValue => squareValue !== null);
  const nextPlayer = isXnext ? 'X' : 'O';

  const renderStatusMessage = () => {
    if (winner) {
      return <>Winner is {winner}</>;
    }
    if (!winner && noMovesLeft) {
      return (
        <>
          <span className="text-orange">O</span> and
          <span className="text-green"> X</span> tied
        </>
      );
    }
    if (!winner && !noMovesLeft) {
      return (
        <>
          Next player is{' '}
          <span className={isXnext ? 'text-green' : 'text-orange'}>
            {nextPlayer}
          </span>
        </>
      );
    }
    return null;
  };

  return <h2 className="status-message">{renderStatusMessage()}</h2>;
};

export default StatusMessage;
