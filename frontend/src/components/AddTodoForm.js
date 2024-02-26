import React, { useState } from 'react';

function AddTodoForm({ addTodo }) {
  const [todoName, setTodoName] = useState('');

  const handleChange = (e) => {
    setTodoName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoName.trim()) {
      addTodo(todoName);
      setTodoName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={todoName} onChange={handleChange} />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodoForm;
