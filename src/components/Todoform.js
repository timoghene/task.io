import { useState } from "react"
import React from 'react'

export const Todoform = ({addTodo}) => {
    const [value, setValue] = useState("");

    const handleSubmit = e =>{
        e.preventDefault();

        addTodo(value)

        setValue("")
    }
  return (
    <form className='Todoform'onSubmit={handleSubmit}>
        <input type="text" value={value} className='todo-input' placeholder='What is the task for today?' onChange={(e)=> setValue(e.target.value)}></input>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
