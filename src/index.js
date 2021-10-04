import React from "react";
import ReactDOM from "react-dom";
import Board from "./board";

class Game extends React.Component {
  render() {
    return (
      <div className="game">
          ALU CROSS
          <br/> <br/>
        <div className="board">
          <Board />
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Game />, document.getElementById("root"));
