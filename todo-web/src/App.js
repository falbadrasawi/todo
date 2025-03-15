import React, { useState } from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: '20px',
    alignItems: 'center',
    minHeight: '100vh',
  },
  taskListContainer: {
    width: '100%',
    marginBottom: '20px',
  },
  task: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #ddd',
    marginBottom: '5px',
  },
  taskText: {
    marginLeft: '10px',
    fontSize: '16px',
    flex: 1,
  },
  completed: {
    textDecoration: 'line-through',
  },
  inputContainer: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: '80px',
    padding: '12px',
    border: '1px solid #ddd',
    marginBottom: '10px',
    resize: 'vertical',
  },
  textInput: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ddd',
    marginBottom: '10px',
  },
  addButton: {
    backgroundColor: '#C7E0FF',
    color: 'white',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

const App = () => {
  const [tasks, setTasks] = useState([
    { key: '1', completed: false, description: 'Task 1', date: 'January 01, 2025', time: '12:00 AM' },
    { key: '2', completed: false, description: 'Task 2', date: 'February 02, 2025', time: '01:00 PM' },
  ]);
  const [newTask, setNewTask] = useState('');
  const [newDate, setNewDate] = useState('January 01, 2025');
  const [newTime, setNewTime] = useState('12:00 AM');

  const addTask = () => {
    if (newTask.trim()) {
      const newTaskObj = {
        key: String(tasks.length + 1),
        completed: false,
        description: newTask,
        date: newDate,
        time: newTime,
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
    }
  };

  const toggleTaskCompletion = (key) => {
    setTasks(
      tasks.map(task =>
        task.key === key ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.taskListContainer}>
        {tasks.map((task) => (
          <div key={task.key} style={styles.task}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.key)}
            />
            <span style={{ ...styles.taskText, ...(task.completed ? styles.completed : {}) }}>
              {task.description}
            </span>
            <span style={styles.taskText}>{task.date}</span>
            <span style={styles.taskText}>{task.time}</span>
          </div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <textarea
          style={styles.input}
          placeholder="New task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <input
          type="text"
          style={styles.textInput}
          placeholder="Date (e.g., January 01, 2025)"
          value={newDate}
          onChange={(e) => setNewDate(e.target.value)}
        />
        <input
          type="text"
          style={styles.textInput}
          placeholder="Time (e.g., 12:00 AM)"
          value={newTime}
          onChange={(e) => setNewTime(e.target.value)}
        />
        <button style={styles.addButton} onClick={addTask}>
          Add Task
        </button>
      </div>
    </div>
  );
};

export default App;
