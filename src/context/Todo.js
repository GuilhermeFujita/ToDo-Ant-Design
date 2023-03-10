import { createContext, useContext, useState } from 'react';

const TodoContext = createContext();

export default function TodoProvider({ children }) {
  const [todos, setTodos] = useState([{ id: 1 }]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  const context = useContext(TodoContext);
  const { todos, setTodos } = context;
  return { todos, setTodos };
}
