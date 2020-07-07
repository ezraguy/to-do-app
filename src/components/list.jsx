import React, { Component } from "react";
import { Container, List, ListItem } from "@material-ui/core";
import "../css/list.css";

class TasksList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, content: "buy milk" },
        { id: 2, content: "play cod" },
      ],
    };
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.task !== prevProps.task) {
      let { todos } = this.state;
      let newTask = this.props.task;
      todos.push({ id: Math.random() * 100, content: newTask });
      this.setState({ todos });
    }
  };

  render() {
    const { todos } = this.state;
    if (todos.length) {
      return (
        <Container>
          <List className="container-list">
            {todos.map((task) => {
              return (
                <ListItem className="list-item" key={task.id}>
                  {task.content}
                </ListItem>
              );
            })}
          </List>
        </Container>
      );
    } else {
      return <p>hooray you are all done!</p>;
    }
  }
}

export default TasksList;
