
import React, { useState } from "react";
import Task from "./Task";
import { Card } from "react-bootstrap";

function TaskList({ tasks, deleteTask }) {
  const [selectedUser, setSelectedUser] = useState("all");

  const handleUserChange = (e) => {
    setSelectedUser(e.target.value);
  };

  const filterTasks = tasks.filter(
    (task) => selectedUser === "all" || task.name === selectedUser
  );

  return (
    <div>
      <div className="filter-area">
        <select name="user" value={selectedUser} onChange={handleUserChange}>
          <option value="all">All</option>
          <option value="yunus">Yunus</option>
          <option value="muharrem">Muharrem</option>
          <option value="polat">Polat</option>
        </select>
      </div>
      <h2>Task List</h2>
      <h3>{filterTasks.length} results returned</h3>

      {filterTasks.length === 0 ? (
        <a href="/add-task">
          <Card><button type="submit" className="btn btn-primary">
            Add List
          </button></Card>
        </a>
      ) : null}
      <ul className="list-group">
        {filterTasks.map((task, index) => {
          
          const taskIndex = tasks.findIndex(x => x === task);
          return (
            <li key={index} className="list-group-item">
              <Task
                task={task}
                deleteTask={() => deleteTask(taskIndex)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TaskList;
