import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(10)

  let addCounter = () =>{
    if(counter <20)
    setCounter(counter + 1)
  }

  let removeCounter = () =>{
    if(counter > 0)
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Vite + React First task with useState</h1>
      <h2>Counter : {counter}</h2>
      <div className='flex gap-2 bg-white content-center justify-center p-1 rounded'>
        <button onClick={addCounter} className='bg-green-500 text-white p-1 m-1 rounded'>Counter +</button>
        <button onClick={removeCounter} className='bg-red-500 text-white p-1 m-1 rounded'>Counter -</button>
      </div>
    </>
  )
}

export default App
