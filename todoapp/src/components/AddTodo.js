import React from 'react';

const AddTodo = ({ onSubmitTodo }) => {
  const onSubmitTodoHandler = (e) => {
    e.preventDefault();
    const todo = e.target.addTodo.value;
    e.target.addTodo.value = '';
    onSubmitTodo(todo);
  };

  return (
    <div>
      <form onSubmit={onSubmitTodoHandler}>
        <label htmlFor="addTodo">Add a new todo item</label>
        <input type="text" id="addTodo" name="addTodo" />
      </form>
    </div>
  );
};

export default AddTodo;
