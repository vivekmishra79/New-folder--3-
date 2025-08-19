import { useState } from 'react'
import Demo  from './assets/Demo'

import './App.css'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>This is the bootstrap</h1>
    <Header/>
    <Demo count={count}/>
    </>
  )
}

export default App
