const Todo = require('../models/todoModel')
//get all todolist
const getTodos =async(req, res) =>{
  try{const todos =await Todo.find().sort({createdAt:-1})
    res.status(200).json(todos)
  }catch (error){res.status(500).json({
       message: 'Error fetching todos', error: error.message})}
}
// create a todo
const createTodo = async(req, res) =>{
  try{
  const {title,description } =req.body;
  const todo =await Todo.create({ title, description })
    res.status(201).json(todo)
  }catch(error){
  res.status(400).json({ message: 'Error creating todo', error: error.message })}
}
//update  todoitem
const updateTodo= async(req,res) =>{
try{const todo = await Todo.findByIdAndUpdate(req.params.id, req.body,{ new: true })
    res.status(200).json(todo)

  }
  catch(error){
    res.status(400).json({ message: 'Error updating todo', error: error.message })
  }
}
// delete a todoitem
const deleteTodo=async(req, res)=> {
  try{
  await Todo.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: 'Todo deleted successfully' });
  }catch(error){
    res.status(400).json({ message: 'Error deleting todo', error: error.message });
}}
module.exports = {getTodos,createTodo,updateTodo,deleteTodo}
