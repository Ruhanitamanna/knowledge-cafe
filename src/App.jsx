import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blog from './components/Blog/Blog'
import Journal from './components/Journal/Journal'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      {/* <Blog></Blog> */}
      <Journal></Journal>
    </div>
  )
}

export default App
