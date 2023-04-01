import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Journal from './components/Journal/Journal'
import Answer from './components/Answer/Answer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Journal></Journal>
      <Answer></Answer>
    </div>
  )
}

export default App
