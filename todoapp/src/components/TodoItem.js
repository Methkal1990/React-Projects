import React from 'react';

const TodoItem = ({ title, toggleTodo, id, done }) => {
  return (
    <div
      onClick={() => toggleTodo(id)}
      style={done ? { textDecoration: 'line-through' } : null}
    >
      {title}
    </div>
  );
};

export default TodoItem;
