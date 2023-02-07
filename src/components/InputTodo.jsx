import { Input } from 'antd';
import { useTodo } from '../context/Todo';

export function InputTodo() {
  const onSearch = (value) => console.log(value);
  const { Search } = Input;

  const {todos, setTodos} = useTodo()

  console.log(todos)

  return (
    <Search
          placeholder='Adicione uma nova tarefa'
          className='searchBox'
          enterButton='Criar'
          size='large'
          onSearch={onSearch}
          style={{
            width: 783,
          }}
        />
  )
}