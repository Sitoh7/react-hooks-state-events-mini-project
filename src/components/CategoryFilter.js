import React,{useState} from "react";


function CategoryFilter({categories,filter}) {


  const [selectedIndex, setSelectedIndex] = useState(null)

  function filterList(e,categories){
// console.log(e)
setSelectedIndex(e)
filter(categories)
//console.log(data)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
 
      {categories.map((data,i)=>{
        return <button className={selectedIndex === i ? "selected" : null} key={i} onClick={()=>filterList(i,data)}>{data}</button>})}
      
      
   
      
    </div>
  );
}

export default CategoryFilter;