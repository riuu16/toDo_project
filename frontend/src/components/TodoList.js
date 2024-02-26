import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, markAsCompleted, deleteTodo }) {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem
          key={todo._id}
          todo={todo}
          markAsCompleted={markAsCompleted}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
