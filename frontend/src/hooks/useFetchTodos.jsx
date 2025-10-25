import { useEffect, useState } from 'react'

const useFetchTodos =() => {
  const [todos,setTodos] =useState([])
  const apiUrl='http://localhost:5000/api/todos'
const fetchTodos = async () => {
const res = await fetch(apiUrl)
    const data =await res.json()
setTodos(data)
  }
 const addTodo = async (title, description) =>{
    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify({ title, description })
    })
const newTodo = await res.json()
setTodos([newTodo, ...todos])
  }

  const deleteTodo = async (id) => {
await fetch(`${apiUrl}/${id}`,{ method:'DELETE'})
    setTodos(todos.filter(t =>t._id!== id))
  }
const toggleComplete = async (id, completed) => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify({ completed: !completed })
    })
    const updated =await res.json()
    setTodos(todos.map(t => (t._id === id ? updated : t)))
  }
const updateTodo = async (id, updatedData) => {
const res = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedData)
})
    const updated = await res.json()
    setTodos(todos.map(t => (t._id === id ? updated : t)))
  }

  useEffect(() => { fetchTodos() }, [])

  return { todos , setTodos , addTodo, deleteTodo, toggleComplete, updateTodo }
}
export default useFetchTodos
