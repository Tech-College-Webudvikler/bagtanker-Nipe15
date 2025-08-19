import { useState } from 'react'
import Nyheder from './context/context.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <p>K</p>
    <Nyheder/>
    </>
  )
}

export default App
