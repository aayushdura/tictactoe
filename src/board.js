import React from "react";
import Square from "./square";
import './board.css'

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square num={this.props.squares[i]}
       onClick={() => this.props.onClick(i)} />
    );
  }

  render() {
    return (
      <div>
        <div className="row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <button className="reset" onClick={() => window.location.reload()}>Play Again!</button>
      </div>
    );
  }
}


export default Board;
