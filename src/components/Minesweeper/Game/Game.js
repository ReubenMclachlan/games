import React from "react";
import Board from "../Board/Board";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import "./gameStyle.css";

class MinesweeperGame extends React.Component {
  constructor(props) {
    super(props);

    this.boardElement = React.createRef();

    this.state = {
      height: 8,
      width: 8,
      mines: 10,
      gameStatus: 0
    };
  }

  handleChange = (prop, value) => {
    this.setState({ [prop]: value });
  };

  handleChangeHeight = event => {
    const val = clamp(event.target.value, 5, 18);
    this.handleChange("height", val);
  };

  handleChangeWidth = event => {
    const val = clamp(event.target.value, 5, 18);
    this.handleChange("width", val);
  };

  handleChangeMines = event => {
    const cap = Math.floor((this.state.height * this.state.width) / 3);
    const val = clamp(event.target.value, 1, cap);
    this.handleChange("mines", val);
  };

  restartGame = () => {
    this.boardElement.current.restartBoard();
  };

  gameInfo = () => {
    alert("How to play Minesweeper: Tap on any unrevealed square to start the game. Numbers on the squares")
          +(" indicate the number of surrounding mines (this includes all 8 squares surrounding it). Based on")
          +(" these numbers and how their 3×3 grids overlap, you can identify or suspect under which squares")
          +(" mines are hidden. Place a flag by right-clicking on the square to mark it as dangerous. Reveal all")
          +(" safe squares without mines to win the game. If you reveal a bomb you lose the game");
  }
  render() {
    const { height, width, mines, gameStatus } = this.state;
    return (
      <div className="game">
        <Board
          ref={this.boardElement}
          height={height}
          width={width}
          mines={mines}
          gameStatus={gameStatus}
        />
        <div className="control-buttons">
          <Button onClick={this.restartGame}>Restart</Button>

          <br/><br/>

          <Button onClick={this.gameInfo}>How to play?</Button>
          <div className="quit">
          <Link to="/">
            <Button>
                Quit
            </Button>
          </Link>
        </div>

          <form>
            <label>Height</label>
            <input
              type="number"
              value={this.state.height}
              onChange={this.handleChangeHeight}
            />
            <label>Width</label>
            <input
              type="number"
              value={this.state.width}
              onChange={this.handleChangeWidth}
            />
            <label>Mines</label>
            <input
              type="number"
              value={this.state.mines}
              onChange={this.handleChangeMines}
            />
          </form>
        </div>
      </div>
    );
  }
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(n, max));
}

export default MinesweeperGame;
