import React from "react";
import "./ClearButton.css";

class ClearButton extends React.Component {
  render() {
    return (
      <div
        className="clear-btn"
        onClick={() => this.props.handleClick(this.props.children)}
      >
        {this.props.children}
      </div>
    );
  }
}

export default ClearButton;
