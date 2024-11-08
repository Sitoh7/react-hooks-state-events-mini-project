import React, { useState } from "react";
import Task from "./Task";

  function TaskList({tasks}) {
    const [listData1,setlistData] = useState(tasks)
    function del(e){

        console.log(e)
       const newdata = listData1.filter(data=> data.text != e)
       setlistData(newdata)
    }
  return (

    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {listData1.map((data,i)=> <Task key={i} text={data.text} category={data.category} del={del}/>)}
      
    </div>
  );
}

export default TaskList;