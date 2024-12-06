import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";



import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
 });

   useEffect(() => {
   localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

   const addTask = (newTask) => {
     setTasks([...tasks, newTask]);
   };



  const deleteTask = (index) => {
    console.log(index);
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks); 
  };



  return (
    <Router>
  
    <div>
    <nav className="navbar navbar-light bg-light">
     <a className="navbar-brand" href="/">
            Todo List
            </a>
  <div className="container-fluid">
 
    <ul className="navbar-nav ">
    <li className="nav-item">
      <Link className="nav-link text-primary text-decoration-none"to="/task-list">
          Task List
        </Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link text-primary text-decoration-none" to="/add-task">
          Add Task
        </Link>
      </li>
    </ul>
    
  </div>
</nav>

    <div className="container mt-4">
          <Routes>
          <Route
            path="/task-list"
            element={
              <TaskList
                tasks={tasks}
                //completeTask={completeTask}
                deleteTask={deleteTask}
              />
            }
          />
          <Route
            path="/add-task"
            element={
              <TaskForm addTask={addTask} />
            }
          />
          </Routes>
        </div>
        </div>
       
          
      
    </Router>
  );
}

export default App;
