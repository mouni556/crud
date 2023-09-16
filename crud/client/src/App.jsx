import { useState } from 'react'
import Home from './components/Home'
import Header from './components/Header'
import Create from './components/Create'
import Router from './router/Router'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Header />
  <Router />
 
    </>
  )
}

export default App
