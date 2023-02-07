import { Header } from './components/Header';
import { Input } from 'antd';
import './global.css';

import './App.css';

const onSearch = (value) => console.log(value);
const { Search } = Input;

export function App() {
  return (
    <div className='App'>
      <Header />
      <div className='wrapper'>
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
      </div>
    </div>
  );
}
