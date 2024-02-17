import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo.jsx'
import Todos from './components/Todos.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center">
      <AddTodo/>
     <Todos/>
   
    </div>
    
   
  )
}

export default App
