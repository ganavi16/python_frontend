import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-blue-300 font-bold text-3xl p-4">
        <h1>My name is Rudraksh</h1>
      </div>
        <p className="font-extrabold">it's a python project</p>
    </>
  )
}

export default App
