import { useState } from 'react'
const TodoItem = ({todo,onDelete,onToggle,onUpdate})=>{
  const [isEditing, setIsEditing] =useState(false)
  const [title, setTitle]= useState(todo.title)
  const [description, setDescription]= useState(todo.description)
  const handleSave =()=> {
    onUpdate(todo._id, {title,description})
    setIsEditing(false)}
  return (
    <li className={`todo-item ${todo.completed ?'completed':''}`}>
      {isEditing ?(
        <>
          <input value={title} onChange={(e) =>setTitle(e.target.value)} />
    <input value={description} onChange={(e)=> setDescription(e.target.value)} />
        <button onClick={handleSave}>Save</button>
 <button onClick={() => setIsEditing(false)}>Cancel</button>
     </>
      ) :(
        <>
          <span 
            onClick={() => onToggle(todo._id, todo.completed)} 
            className="todo-text"
          >
             <strong>{todo.title}</strong> — {todo.description}
          </span>
          <div className="actions">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => onDelete(todo._id)}>Delete</button>
          </div></>
      )}</li>)
}
export default TodoItem
