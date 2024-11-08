import React, { useState } from "react";
import Task from "./Task";

  function TaskList({listData}) {
    const [listData1,setlistData] = useState(listData)
    function del(e){

        console.log(e)
       const newdata = listData1.filter(data=> data.text != e)
       setlistData(newdata)
    }
  return (

    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {listData1.map((data,i)=> <Task key={i} taskName={data.text} taskCategory={data.category} del={del}/>)}
      
    </div>
  );
}

export default TaskList;