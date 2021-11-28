import './App.css';
import Landing from './components/Landing';
import MemoryGame from './components/MemoryGame/Board/MemoryGame';
import MinesweeperGame from './components/Minesweeper/Game/Game';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/Minesweeper" element={<MinesweeperGame />} />
            <Route path="Memory-card-game" element={<MemoryGame />} />
          </Routes>
        </div>
      </Router> 
    </div>
  );
}

export default App;