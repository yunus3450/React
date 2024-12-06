import React, { useState } from "react";


function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("yunus")
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("low");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ title, description, priority, name, completed: false });
    setTitle("");
    setDescription("");
    setPriority("low");
    setName("yunus");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="display-6">Title:</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
      <label className="display-6">User:</label>
      
      <select  className="form-control"
      value={name} onChange={(e) => setName(e.target.value)}>
        <option   value="yunus">yunus</option>
          <option value="muharrem">muharrem</option>
          <option value="polat">polat</option>
      </select>
      </div>
      <div>
        <label className="display-6">Description:</label>
        <textarea
          value={description}
          className="form-control"
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="display-6">Priority:</label>
        <select 
        className="form-control"
        value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option  value="low">Low</option>
          <option  value="medium">Medium</option>
          <option  value="high">High</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Add Task</button>
    </form>
  );
}

export default TaskForm;
