import { Header } from './components/Header';

import './global.css';

import './App.css';
import { InputTodo } from './components/InputTodo';

import TodoProvider from './context/Todo';

export function App() {
  return (
    <TodoProvider>
      <div className='App'>
        <Header />
        <div className='wrapper'>
          <InputTodo />
        </div>
      </div>
    </TodoProvider>
  );
}
