import React, { Component } from "react";
import M from "materialize-css";

class Range extends Component {
  render() {
    return (
      <p className="range-field">
        <input
          ref={range => M.Range.init(range)}
          type="range"
          id="test5"
          min="0"
          max={this.props.max}
          defaultValue="0"
        />
      </p>
    );
  }
}

export default Range;
