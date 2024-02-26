import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('/api/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const addTodo = async (todoName) => {
    try {
      const response = await axios.post('/api/todos', { name: todoName });
      setTodos([...todos, response.data]);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const markAsCompleted = async (id) => {
    try {
      await axios.put(`/api/todos/${id}`, { completed: true });
      const updatedTodos = todos.map(todo =>
        todo._id === id ? { ...todo, completed: true } : todo
      );
      setTodos(updatedTodos);
    } catch (error) {
      console.error('Error marking todo as completed:', error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`/api/todos/${id}`);
      const updatedTodos = todos.filter(todo => todo._id !== id);
      setTodos(updatedTodos);
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} markAsCompleted={markAsCompleted} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
