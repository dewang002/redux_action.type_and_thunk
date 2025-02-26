import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "./store/slice/TodoSlice"
import Card from "./component/Card"
import { useSelector } from 'react-redux'


function App() {
  const { value, loading, error } = useSelector( state => state.todo )
  const dispatch = useDispatch()
  
  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')
  

  const handleClick = () => {
    if (!title || !description) return alert("Title and description are required!");
      dispatch(addTask(title,description))
      setTitle('')
      setDescription('')
    }

   return (
   <div>
   <input className="border" value={title} onChange={(e)=>setTitle(e.target.value)} type="text" />
   <input className="border" value={description} onChange={(e)=>setDescription(e.target.value)} type="text" />
   <button className="bg-blue-600 text-white" onClick={handleClick} >addTask</button>

   {
   loading? "loading..." : value?.map( elem => {
    return <Card deleteItem={elem} done={elem.done} text={elem} id={elem.id} />
   })
   }
   
   </div>
  )
}

export default App
