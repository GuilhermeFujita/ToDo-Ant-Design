import { Input } from 'antd';
import { useTodo } from '../context/Todo';

export function InputTodo() {
  const onSearch = (value) => console.log(value);
  const { Search } = Input;

  const {todos, setTodos} = useTodo()

  console.log(todos)

  return (
    <Search
          placeholder='input search text'
          className='searchBox'
          enterButton='Search'
          size='large'
          onSearch={onSearch}
          style={{
            width: 783,
          }}
        />
  )
}