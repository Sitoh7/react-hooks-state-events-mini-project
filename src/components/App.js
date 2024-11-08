import React, {useState,useEffect} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
//console.log("Here's the data you're working with");
//console.log({ CATEGORIES, TASKS });

function App() {

  const [selectedCategory,setSelectedCategory] = useState('All')
  const [taskList,setTaskList] = useState(TASKS)
 //const [filteritem,setfilteritem]= useState("All")

  function filter(e){
  //console.log(e)
    setSelectedCategory(e)
    console.log(selectedCategory)
    }


  const listToDisplay=taskList.filter((data)=>{
    if (selectedCategory === "All") {
      return true;
    } else {
      return data.category === selectedCategory;
    }
  });



  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter   data={CATEGORIES} filter={filter}/>
      <NewTaskForm />
      <TaskList  listData={listToDisplay}/>
    </div>
  );
}

export default App;