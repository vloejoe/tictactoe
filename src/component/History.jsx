const History = ({ history, moveTo, currentMove }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((_, index) => (
          <li key={index}>
            <button
              type="button"
              className={`btn-move ${currentMove === index ? `active` : ''}`}
              style={{
                FontWeight: currentMove === index ? 'bold' : 'normal',
              }}
              onClick={() => moveTo(index)}
            >
              {index === 0 ? 'Go to game start' : `Got to move #${index}`}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
  console.log(index);
};

export default History;
