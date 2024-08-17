import { useState } from "react"
import React from 'react'

export const EditTodoform = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = e =>{
        e.preventDefault();

        editTodo(value, task.id)

        setValue("")
    }
  return (
    <form className='Todoform'onSubmit={handleSubmit}>
        <input type="text" value={value} className='todo-input' placeholder='Update Task' onChange={(e) => setValue(e.target.value)}></input>
        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}
