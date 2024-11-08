import { useState } from "react";


function NewTaskForm({categories,onTaskFormSubmit}) {

const [details,setDetails] = useState("")
const [category,setCategory] = useState("All")

function SubmitForm(e){
e.preventDefault()
onTaskFormSubmit(details,category)

const newTask = {
  text: details,
  category: category,
};
onTaskFormSubmit(newTask)
}



  return (
    <form className="new-task-form" onSubmit={SubmitForm}>
      <label>
        Details
        <input type="text" name="text"  value={details} onChange={(e)=>setDetails(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" onChange={(e)=>setCategory(e.target.value)}>
          {/* render <option> elements for each category here */}
          {categories.map((data,i)=>{return(
          <option key={i} value={data}>{data}</option>
          )})}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

