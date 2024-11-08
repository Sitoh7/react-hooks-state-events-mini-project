import React,{useState} from "react";


function CategoryFilter({data,filter}) {


  const [selectedIndex, setSelectedIndex] = useState(null)

  function filterList(e,data){
// console.log(e)
setSelectedIndex(e)
filter(data)
//console.log(data)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
 
      {data.map((data,i)=>{
        return <button className={selectedIndex === i ? "selected" : ""} key={i} onClick={()=>filterList(i,data)}>{data}</button>})}
      
      
   
      
    </div>
  );
}

export default CategoryFilter;