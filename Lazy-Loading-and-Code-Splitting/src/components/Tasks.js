function Tasks() {
    const tasks = [
      { id: 1, title: "React Router ile yönlendirme", completed: true },
      { id: 2, title: "Lazy Loading ile sayfaları optimize et", completed: false },
      { id: 3, title: "Redux ile global state yönetimi öğren", completed: false },
    ];
  
    return (
      <div>
        <h1>📋 Görevlerim</h1>
        <ul>
          {tasks.map((task) => (
            <li key={task.id} style={{ color: task.completed ? "green" : "red" }}>
              {task.title} {task.completed ? "✅" : "❌"}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Tasks;
  