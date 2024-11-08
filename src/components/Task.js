import React from "react";

function Task({text,category,del}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => del(text)}>X</button>
    </div>
  );
}

export default Task;