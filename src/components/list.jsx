import React, { Component } from "react";
import "../css/list.css";
import _ from "lodash";
import "animate.css";
class TasksList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: "list-item animate__bounceInDown",
      exitClasses: "list-item animate__backOutRight",
      todos: [],
    };
  }

  getTodayDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!

    let yyyy = today.getFullYear();
    today = dd + "." + mm + "." + yyyy;

    return today;
  };

  componentDidUpdate = (prevProps) => {
    if (this.props.task !== prevProps.task) {
      let { todos } = this.state;
      let newTask = this.props.task;
      todos.push({
        id: Math.random() * 100,
        content: newTask,
        date: this.getTodayDate(),
      });
      this.setState({ todos });
    }
  };

  deleteTask = (e, id) => {
    let { todos } = this.state;
    let filterdArr = _.filter(todos, (task) => {
      return task.id !== id;
    });

    this.setState({ todos: filterdArr });
  };

  render() {
    const { todos } = this.state;
    if (todos.length) {
      return (
        <div className="contaniner-fluid ">
          <div className="container-list container ">
            {todos.map((task) => {
              return (
                <div className={this.state.classes} key={task.id}>
                  {task.content}
                  <span className="task-date text-muted">{task.date}</span>

                  <svg
                    onClick={(e) => this.deleteTask(e, task.id)}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z" />
                  </svg>
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div className="container-list container ">
          <p>hooray you are all done!</p>
        </div>
      );
    }
  }
}

export default TasksList;
