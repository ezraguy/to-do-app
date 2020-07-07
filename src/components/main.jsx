import React, { Component } from "react";
import List from "./list";
import Input from "./input";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: "",
    };
  }
  getTask = (task) => {
    let { newTask } = this.state;
    newTask = task;
    this.setState({ newTask });
  };
  render() {
    return (
      <div>
        <Input getTask={this.getTask} />
        <List task={this.state.newTask} />
      </div>
    );
  }
}

export default Main;
