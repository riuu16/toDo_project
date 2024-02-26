import React from 'react';

function TodoItem({ todo, markAsCompleted, deleteTodo }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => markAsCompleted(todo._id)}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.name}
      </span>
      <button onClick={() => deleteTodo(todo._id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
