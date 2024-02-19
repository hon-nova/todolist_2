import {useState,useEffect} from 'react'
import UserInputForm from './UserInputForm'
const UserDashboard =()=>{

   const [task,setTask]=useState('')
   const [taskArr,setTaskArr]=useState([])
   const [editedItem,setEditedItem]=useState('')
   const [editedIndex, setEditedIndex]=useState(-1)
   // eslint-disable-next-line no-unused-vars
   const [inputStyle,setInputStyle]= useState(false)
   // const [strike,setStrike]=useState(false)
   const [checkedItems,setCheckedItems]=useState(Array(taskArr.length).fill(false))

   const takeCallback =(data)=>{
      setTask(data.task)
      setTaskArr((tasks)=>[...tasks,data.task])
   }
   useEffect(()=>{
      console.log('taskArr::',taskArr,)
   },[taskArr])

   const handleDelete =(index)=>
   {
      let tempArr=[...taskArr]
      tempArr.splice(index,1)
      setTaskArr(tempArr)
   }
   const handleEditChange =(event)=>{      
      setEditedItem(event.target.value)
   }

   const handleEdit =(item,index)=>{
      // alert("You've hit Edit button")
      setEditedItem(item)
      setEditedIndex(index)
      setInputStyle(true)
     
   }
   const handleEditSubmit=(e)=>{
      e.preventDefault()
      const updatedTaskArr = [...taskArr]

      if(editedIndex!==-1){
         updatedTaskArr[editedIndex]=editedItem
         //update the general taskArr
         setTaskArr(updatedTaskArr)
         setTask('')
         setEditedItem('')
         setEditedIndex(-1)
      }      
   } 
   let thisStyle={
      color: 'red',
      borderColor: 'green',
      fontSize: '25px',
      fontWeight: 'bolder'
   }

console.log(Array(taskArr.length).fill(false))
const handleToggle = (index)=>{
   setCheckedItems((thisCheckedItems)=>{
      let updatedCheckedItems=[...thisCheckedItems]
      updatedCheckedItems[index]=!updatedCheckedItems[index]
      return updatedCheckedItems
   })
}

   return (
      <div className="main-container">
      <div className="left"></div>
      <div className="center">
      <div className="child">
      <h1>Creating a Todo List ( {new Date().toLocaleDateString()} )</h1>
      <UserInputForm callback={takeCallback}/>
      </div>
      <div className="todo">
      <ul>
      {taskArr.length>0 && taskArr.map((item,index)=>(
         <li key={index}>
               <div id="li-task">
                  <input type="checkbox"
                     checked={checkedItems[index]}
                     onChange={()=>handleToggle(index)}
                     // onChange={}
                  />
                  {/* <p>{task}</p> */}
                  {editedIndex===index ? (
                     <form onSubmit={handleEditSubmit}>
                        <input type="text" value={editedItem}
                        onChange={(e)=>{handleEditChange(e)}}
                           style={thisStyle}
                        /><br/>
                        <button type="submit">Done</button>
                  </form>
                  ): <p className={checkedItems[index]? 'task-done':''}>{item}</p>}
                 
                 
                  <span>
                  <button onClick={()=>handleDelete(index)}
                  id="btn-delete"><span className="material-symbols-outlined">
delete
</span></button>
                  <button onClick={()=>handleEdit(task,index)} id="btn-edit"><span className="material-symbols-outlined">
edit
</span></button>
                  </span>
                 
               </div>
            </li>
      ))}
            
      </ul>
      </div>   
        
         </div>
         <div className="right"></div>
      </div>
     
   )
}
export default UserDashboard;