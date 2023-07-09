import { Children } from 'react';
import './style.scss';
import Square from './component/Square';
import Board from './component/Board';

function App() {
  return (
    <div className="app">
      <Board />
    </div>
  );
}

export default App;
