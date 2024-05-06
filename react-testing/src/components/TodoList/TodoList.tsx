// TodoList.tsx

import React, { useState } from 'react';

type Todo = {
  id: number;
  text: string;
};

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      let newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
      setTodos(curr => [...curr, { id: newId, text: newTodo }]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className='todo-list'>
      <label htmlFor="todo">Todo:</label>
      <input
        required
        id="todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
