import React, { useState, useMemo } from "react";
import './../styles/App.css';

// Generate a list of 50 tasks, 25 active and 25 completed
const generateTasks = () => {
  const tasks = [];
  for (let i = 1; i <= 50; i++) {
    tasks.push({
      id: i,
      text: `Task ${i}`,
      completed: i <= 25, // First 25 tasks are completed, others are active
    });
  }
  return tasks;
};

const App = () => {
  const [tasks] = useState(generateTasks()); // Initial task list
  const [currentTab, setCurrentTab] = useState("all"); // Tab for filtering tasks
  const [darkMode, setDarkMode] = useState(false); // Dark mode toggle

  // useMemo to filter tasks based on the selected tab
  const filteredTasks = useMemo(() => {
    return tasks.filter(task => {
      if (currentTab === "all") return true;
      if (currentTab === "active") return !task.completed;
      if (currentTab === "completed") return task.completed;
    });
  }, [tasks, currentTab]);

  // Artificial delay for rendering
  const delayedTasks = useMemo(() => {
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    delay(2000); // Delay of 2 seconds to simulate complex computation
    return filteredTasks;
  }, [filteredTasks]);

  // Toggle dark mode
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      {/* Tab buttons */}
      <div>
        <button onClick={() => setCurrentTab("all")}>All</button>
        <button onClick={() => setCurrentTab("active")}>Active</button>
        <button onClick={() => setCurrentTab("completed")}>Completed</button>
      </div>
      
      {/* Dark mode toggle */}
      <button onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>
      
      {/* Task list */}
      <ul>
        {delayedTasks.map(task => (
          <li key={task.id} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.text} 
            <span>{task.completed ? " (Completed)" : " (Active)"}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
/*
import React, { useState, useMemo } from "react";
import './../styles/App.css';

// Generate a list of 50 tasks, 25 active and 25 completed
const generateTasks = () => {
  const tasks = [];
  for (let i = 1; i <= 50; i++) {
    tasks.push({
      id: i,
      text: `Task ${i}`,
      completed: i <= 25, // First 25 tasks are completed, others are active
    });
  }
  return tasks;
};

const App = () => {
  const [tasks] = useState(generateTasks()); // Initial task list
  const [currentTab, setCurrentTab] = useState("all"); // Tab for filtering tasks
  const [darkMode, setDarkMode] = useState(false); // Dark mode toggle

  // useMemo to filter tasks based on the selected tab
  const filteredTasks = useMemo(() => {
    return tasks.filter(task => {
      if (currentTab === "all") return true;
      if (currentTab === "active") return !task.completed;
      if (currentTab === "completed") return task.completed;
    });
  }, [tasks, currentTab]);

  // Artificial delay for rendering
  const delayedTasks = useMemo(() => {
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    delay(2000); // Delay of 2 seconds to simulate complex computation
    return filteredTasks;
  }, [filteredTasks]);

  // Toggle dark mode
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
     
      <div>
        <button onClick={() => setCurrentTab("all")}>All</button>
        <button onClick={() => setCurrentTab("active")}>Active</button>
        <button onClick={() => setCurrentTab("completed")}>Completed</button>
      </div>
      
     
      <button onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>
      
      
      <div>
        {delayedTasks.map(task => (
          <div key={task.id}>
            <span>{task.text}</span>
            <span>{task.completed ? "Completed" : "Active"}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
/*
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
       
    </div>
  )
}

export default App
*/