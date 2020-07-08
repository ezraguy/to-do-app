import React, { Component } from "react";
import "../css/input.css";
import "animate.css";
class TaskInput extends Component {
  constructor(props) {
    super(props);
    this.state = { taskValue: "" };
  }

  handleChange = (e) => {
    let taskValue = e.target.value;
    this.setState({ taskValue });
  };

  handleEnterClick = (e) => {
    if (e.charCode === 13) {
      this.props.getTask(this.state.taskValue);
    }
  };

  render() {
    return (
      <div>
        <input
          placeholder="Enter task here..."
          className="input-text"
          value={this.state.taskValues}
          onChange={this.handleChange}
          onKeyPress={this.handleEnterClick}
        ></input>

        <button
          className="btn btn-primary"
          onClick={() => this.props.getTask(this.state.taskValue)}
        >
          SAVE
        </button>
      </div>
    );
  }
}

export default TaskInput;
