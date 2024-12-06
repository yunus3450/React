import React from "react";

function Task({ task, completeTask, deleteTask }) {
  return (
    <div className="container mt-4" style={{ textDecoration: task.completed ? "line-through" : "" }}>
      <h3 className="display-4">{task.title}</h3>
      <p class="text-primary">{task.description}</p>
      <p class="text-success">Priority: {task.priority}</p>
      <p class="text-success">User: {task.name}</p>

      
      <button type="button" className="btn btn-danger" onClick={deleteTask}>Delete</button>
    </div>
  );
}

export default Task;
