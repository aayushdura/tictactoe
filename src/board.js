import React from "react";
import Square from "./square";
import './board.css'

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = { squares: Array(9).fill(null), oIsNext: true };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.oIsNext?"O":"X";
    this.setState({ squares: squares, oIsNext: !this.state.oIsNext,});
  }

  renderSquare(i) {
    return (
      <Square num={this.state.squares[i]} onClick={() => this.handleClick(i)} />
    );
  }

  render() {
    const winner= calculateWinner(this.state.squares);
    let status= !winner?"Next Player:" + (this.state.oIsNext ? "O" : "X") :"winner"+winner;
    return (
      <div>
        <div className="status">{status}</div>
        <div className="row1">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="row2">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="row3">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <button className="reset" onClick={()=>window.location.reload()}>Play Again!</button>
      </div>
    );
  }
}
function calculateWinner(squares) {
  const winningcases = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  console.log({squares});
  for (let i = 0; i < winningcases.length; i++) {
    const [a, b, c] = winningcases[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}



export default Board;
