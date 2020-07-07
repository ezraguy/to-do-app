import React, { Component } from "react";
import { Container, Input, Button } from "@material-ui/core";
import "../css/input.css";
class TaskInput extends Component {
  constructor(props) {
    super(props);
    this.state = { taskValue: "" };
  }

  handleChange = (e) => {
    let taskValue = e.target.value;
    this.setState({ taskValue: taskValue });
  };

  render() {
    return (
      <Container>
        <Input
          className="input-text"
          color={"primary"}
          placeholder={"Enter a task..."}
          required={true}
          type={"text"}
          margin={"dense"}
          value={this.state.taskValues}
          onChange={this.handleChange}
        ></Input>
        <Button
          variant="contained"
          color="primary"
          onClick={() => this.props.getTask(this.state.taskValue)}
        >
          SAVE
        </Button>
      </Container>
    );
  }
}

export default TaskInput;
