import React from "react";
import './square.css'
class Square extends React.Component {
  render(props) {
      console.log(props);
    return (
      <button
        className="squ"
        onClick={() => this.props.onClick()
        }
      >
        {this.props.num}
      </button>
    );
  }
}

export default Square;
