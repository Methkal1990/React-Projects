import React from 'react';

import TodoItem from './TodoItem';

const TodoContainer = ({ todos, toggleTodo }) => {
  return (
    <div>
      {todos.map(({ id, ...otherProps }) => {
        return (
          <TodoItem key={id} id={id} {...otherProps} toggleTodo={toggleTodo} />
        );
      })}
    </div>
  );
};

export default TodoContainer;
