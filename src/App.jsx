import { useState } from 'react';
import './style.scss';
import Board from './component/Board';

function App() {
  const [counter, setCounter] = useState(1);

  const onBtnclick = () => {
    setCounter(currentCounter => {
      return currentCounter + 1;
    });
  };

  return (
    <div className="app">
      <button onClick={onBtnclick}>Click me</button>
      <div>{counter}</div>
      <Board />
    </div>
  );
}

export default App;
