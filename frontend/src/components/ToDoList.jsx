import React, { useState } from 'react';
import '../assets/todo.css';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const updated = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
  };

  return (
    <div className="container todo-container">
      <h1 className="text-center mb-4">📝 My To-Do List</h1>

      <div className="row g-2 mb-3 align-items-center justify-content-center">
        <div className="col-md-8">
          <input
            type="text"
            className="form-control"
            placeholder="Add a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <button className="btn btn-warning w-100" onClick={addTask}>
            Add Task
          </button>
        </div>
      </div>

      <p className="text-center text-muted mb-4">☑️ Click checkbox to mark as complete</p>

      <ul className="list-group">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`list-group-item d-flex align-items-center justify-content-between ${task.completed ? 'completed' : ''}`}
          >
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
                id={`task-${index}`}
              />
              <label
                className={`form-check-label ${task.completed ? 'text-decoration-line-through text-muted' : ''}`}
                htmlFor={`task-${index}`}
              >
                {task.text}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
