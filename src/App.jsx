import { useState } from 'react'
import NGOFinder from './pages/tempMain'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NGOFinder/>
    </>
  )
}

export default App
