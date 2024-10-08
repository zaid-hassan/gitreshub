import { useState } from 'react'
import { Card, Search } from './components/index'

function App() {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([]);

  async function getData(userName) {
    const url = `https://api.github.com/users/${userName}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setData(null)
        throw new Error(`Response status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data)
      setData(data);
    } catch (error) {
      console.error(error.message);
    }
  }
  return (
    <div className='flex justify-center items-center flex-col p-11 space-y-6'>
      <Search
        inputValue={inputValue}
        setInputValue={setInputValue}
        onSearch={() => getData(inputValue)} />
      <Card data={data} />
    </div>

  )
}

export default App
