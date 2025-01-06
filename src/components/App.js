import React, { useState, useMemo } from "react";
import './../styles/App.css';


const generateTasks = () => {
  const tasks = [];
  for (let i = 1; i <= 50; i++) {
    tasks.push({
      id: i,
      text: `Todo ${i}`,
      completed: i <= 25, 
    });
  }
  return tasks;
};

const App = () => {
  const [tasks] = useState(generateTasks()); 
  const [currentTab, setCurrentTab] = useState("all"); 
  const [darkMode, setDarkMode] = useState(false); 

  
  const filteredTasks = useMemo(() => {
    return tasks.filter(task => {
      if (currentTab === "all") return true;
      if (currentTab === "active") return !task.completed;
      if (currentTab === "completed") return task.completed;
    });
  }, [tasks, currentTab]);

 
  const delayedTasks = useMemo(() => {
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    delay(2000); 
    return filteredTasks;
  }, [filteredTasks]);

 
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