import { useState } from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import useFetchTodos from '../hooks/useFetchTodos'

const Home = () => {
  const { todos , setTodos , addTodo, deleteTodo, toggleComplete, updateTodo } = useFetchTodos()

  return (
    <div className="home">
      <h1>My To-Do List</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList  todos={todos}  onDelete={deleteTodo}  onToggle={toggleComplete}  onUpdate={updateTodo}  />
    </div>
  )
}
export default Home
