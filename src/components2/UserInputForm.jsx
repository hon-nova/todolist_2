import {useState} from 'react'

// eslint-disable-next-line react/prop-types
const UserInputForm =({callback})=>{

   const [rawTask,setRawTask] =useState('')

   const handleInputChange =(e)=>{
      e.preventDefault()
      setRawTask(e.target.value)
   }
   const handleSubmit =(e)=>{
      e.preventDefault()
      if(callback){
         callback({task: rawTask})
      }
      setRawTask('')
   }

   return (
      <div>
         <form onSubmit={handleSubmit}>
         <input type="text" 
            value={rawTask}
            onChange={handleInputChange}
               id="input-task"
            />
         <button type="submit"
         id="btn-task"
         >Add Todo</button></form><hr/>
      </div>
   )
}
export default UserInputForm;