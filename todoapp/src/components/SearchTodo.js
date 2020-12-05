import React from 'react';

const SearchTodo = ({ searchTerm, setSearchTerm }) => {
  return (
    <div>
      <label>Search todos</label>
      <input
        type="search"
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="type anything..."
      />
    </div>
  );
};

export default SearchTodo;
