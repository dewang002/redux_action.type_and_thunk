import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, doneTask } from '../store/slice/TodoSlice'

const Card = ({ text,id,done,deleteItem }) => {
    const dispatch = useDispatch()
    return (
    <div className='h-50 w-64 bg-zinc-200'>
        <h1>{text.title}</h1>
        <h3>{text.description}</h3>
        <div onClick={()=>dispatch(doneTask(id))} className=''> status :{ done?" done":" notDone" } </div>
        <button onClick={()=>dispatch(deleteTask(id))} className='bg-red-800 text-white'>DELETE</button>
    </div>
  )
}

export default Card