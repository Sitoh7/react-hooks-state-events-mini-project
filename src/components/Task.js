import React from "react";

function Task({taskName,taskCategory,del}) {
  return (
    <div className="task">
      <div className="label">{taskCategory}</div>
      <div className="text">{taskName}</div>
      <button className="delete" onClick={() => del(taskName)}>X</button>
    </div>
  );
}

export default Task;