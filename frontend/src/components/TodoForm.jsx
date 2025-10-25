import {useState} from 'react'

const TodoForm =({ onAdd }) =>{
  const [title,setTitle]=useState('')
  const [description,setDescription] =useState('')
const handleSubmit = (e) =>{ e.preventDefault()
    if (!title.trim()) return
    onAdd(title,description)
    setTitle('')
    setDescription('')}
  return (
    <form onSubmit= { handleSubmit} className="todo-form">
    <input type="text" placeholder="titel" value={title} onChange={(e) =>setTitle(e.target.value)}/>
      <input type="text" placeholder="description" value={description} onChange={ (e)=> setDescription(e.target.value) } />
    <button type="submit"> Add</button>
    </form>)}
export default TodoForm
