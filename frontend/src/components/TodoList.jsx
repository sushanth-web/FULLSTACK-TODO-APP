import TodoItem from './TodoItem'

const TodoList = ({ todos,onDelete,onToggle,onUpdate}) => {
  if (!todos.length) return <p>No todos aded yet...</p>
return (
<ul className="todo-list">
    {todos.map(todo => (
        <TodoItem key={todo._id}  todo={todo} onDelete={onDelete}  onToggle={onToggle} onUpdate={onUpdate} />
      ))}
    </ul>)}

export default TodoList
