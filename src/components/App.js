import React, {useState, useEffect} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [taskList, setTaskList] = useState(TASKS)
  // Add a key to track updates
  const [updateKey, setUpdateKey] = useState(0)

  function filter(category) {
    setSelectedCategory(category)
  }

  const listToDisplay = taskList.filter((data) => {
    if (selectedCategory === "All") {
      return true;
    }
    return data.category === selectedCategory
  });

  function onTaskFormSubmit(newTask) {
   
    
    setTaskList(prevList => [...prevList, newTask]);
    // Increment update key to force re-render
    setUpdateKey(prev => prev + 1);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filter={filter}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList 
        key={`${selectedCategory}-${updateKey}`} 
        tasks={listToDisplay}
      />
    </div>
  );
}

export default App;