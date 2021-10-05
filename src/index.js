import React from "react";
import ReactDOM from "react-dom";
import Board from "./board";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      oIsNext: true,
        };
  }
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber+1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.oIsNext ? "O" : "X";
    this.setState({ history: history.concat([{ squares: squares }]),
                    oIsNext: !this.state.oIsNext, 
                    stepNumber:history.length,});
    console.log(current);
    console.log(history);
  }
  jumpTo(step){
    this.setState({
      stepNumber: step,
      oIsNext: (step%2)===0,
    });
    console.log(step);
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);    
    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move' + move : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );

    });

    let status = !winner ? "Next Player:" + (this.state.oIsNext ? "O" : "X") : "Winner:" + winner;
    return (
      <div className="game">
        ALU CROSS
        <br /> <br />
        <div className="board">
          <Board squares={current.squares} onClick={(i) => this.handleClick(i)} />
        </div>
        <div className="gameinfo">
          {status}
          <ol type="i">{moves}</ol>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Game />, document.getElementById("root"));


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
  console.log({ squares });
  for (let i = 0; i < winningcases.length; i++) {
    const [a, b, c] = winningcases[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null
}



